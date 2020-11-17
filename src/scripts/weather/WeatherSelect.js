import { getWeather, useWeather, getGeocode, useGeocode } from "./WeatherProvider.js"


export const defaultWeather = () => {
    getGeocode("nashville", "tn").then(() => {
        const locationArray = useGeocode()
        const locationLat = locationArray[0].point.lat
        const locationLng = locationArray[0].point.lng
        getWeather(locationLat, locationLng).then(() => {
            const htmlTarget = document.querySelector(".weatherBox")
            const nashWeather = useWeather()
            const h4Target = document.querySelector(".h4Nashville")
            const fiveDayWeather = nashWeather.daily.slice(0, 5)
            let weatherArr = [];
            for( let i = 0; i < 1; i++ ) {
                weatherArr.push(fiveDayWeather[i]);
            }
            const weatherHTML = weatherArr.map(day => {
                const datept1 = day.dt * 1000
                const humanDate = new Date(datept1)
                const condensedDate = humanDate.toLocaleDateString("en-US", {
                    month: "numeric",
                    day: "numeric",
                    year: "numeric"
                })
                const high = Math.floor(day.temp.max)
                const low = Math.floor(day.temp.min)
                const precip = day.weather[0].description
                const iconAddress = `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`
                return `
                <div class="weatherDay">
                <div>
                <img src="${iconAddress}">
                </div>
                <p class="date">${condensedDate}</p>
                <p class="highTemp">High: ${high}&#8457;</p>
                <p class="lowTemp">Low: ${low}&#8457;</p>
                <p class="rainCondition">${precip}</p>
                </div>
                `
            }).join("")
            h4Target.innerHTML = `<h4>Nashville Forecast</h4>`
            htmlTarget.innerHTML += weatherHTML
        })
    })
    }

export const eventWeather = (city, state) => {
    getGeocode(city, state).then(() => {
        const locationArray = useGeocode()
        const locationLat = locationArray[0].point.lat
        const locationLng = locationArray[0].point.lng
        getWeather(locationLat, locationLng).then(() => {
            const htmlTarget = document.querySelector(".weatherBox")
            const nashWeather = useWeather()
            const h4Target = document.querySelector(".h4Nashville")
            const fiveDayWeather = nashWeather.daily.slice(0, 5)
            const weatherHTML = fiveDayWeather.map(day => {
                const datept1 = day.dt * 1000
                const humanDate = new Date(datept1)
                const condensedDate = humanDate.toLocaleDateString("en-US", {
                    month: "numeric",
                    day: "numeric",
                    year: "numeric"
                })
                const high = Math.floor(day.temp.max)
                const low = Math.floor(day.temp.min)
                const precip = day.weather[0].description
                const iconAddress = `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`
                return `
                <div class="weatherDay">
                <div>
                <img src="${iconAddress}">
                </div>
                <p class="date">${condensedDate}</p>
                <p class="highTemp">High: ${high}&#8457;</p>
                <p class="lowTemp">Low: ${low}&#8457;</p>
                <p class="rainCondition">${precip}</p>
                </div>
                `
            }).join("")
            h4Target.innerHTML = `<h4>${city} Forecast</h4>`
            htmlTarget.innerHTML += weatherHTML
        })
    })
    }
    