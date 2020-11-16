import { getWeather, useWeather } from "./WeatherProvider.js"



export const defaultWeather = () => {


    getWeather("Nashville", "TN", "us").then(() => {
        const htmlTarget = document.querySelector(".weatherBox")
        const nashWeather = useWeather()
        const h4Target = document.querySelector(".h4Nashville")
        const fiveDayWeather = nashWeather.list.slice()
let weatherArr = [];
for( let i = 4; i < fiveDayWeather.length; i += 8 ) {
    weatherArr.push(fiveDayWeather[i]);
}

        const weatherHTML = weatherArr.map(list => {
            const datept1 = list.dt * 1000
            const humanDate = new Date(datept1)
            const condensedDate = humanDate.toLocaleDateString("en-US", {
                month: "numeric",
                day: "numeric",
                year: "numeric"
            })
            const temp = Math.floor((list.main.temp_max - 273.15) * 9/5 + 32)
            const precip = list.weather[0].description
            const iconAddress = `http://openweathermap.org/img/wn/${list.weather[0].icon}@2x.png`
            return `
                <div class="weatherDay">
                    
                    <p class="date">${condensedDate}</p>
                    <p class="highTemp">Temp: ${temp}</p>
                    <p class="rainCondition">Forecast: ${precip}</p>
                    <img src ="${iconAddress}">
                </div>
            `
        }).join("")
        h4Target.innerHTML = `<h4>Forecast</h4>`
        htmlTarget.innerHTML += weatherHTML
    })
}