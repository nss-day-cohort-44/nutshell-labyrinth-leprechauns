import { keys } from '../../Settings.js'

let weather = {}

export const useWeather = () => weather

export const getWeather=(lat, lng)=>
{
    return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=imperial&exclude=current,minutely,hourly&appid=${keys.weatherKey}`, {
        method: "GET"
    })
    .then(response=>response.json())
    .then(parsedWeather=>{
        Object.assign(weather,parsedWeather)
    })
}

let location = []
export const getGeocode =(city, statecode)=>{
    return fetch(`https://graphhopper.com/api/1/geocode?q=${city},${statecode}&locale=us&debug=true&key=e2ca9f7a-3d59-4961-8590-d1e6d3e5c8f1`, {
        method: "Get"
    })
    .then(response=>response.json())
    .then(parsedLocation=>{
        location=parsedLocation.hits
    })
}

export const useGeocode = () => location.slice()


