import { keys } from '../../Settings.js'

let weather = {}

export const useWeather = () => weather

export const getWeather=(city, stateCode, countryCode)=>
{
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${stateCode},${countryCode}&appid=${keys.weatherKey}`, {
        method: "GET"
    })
    .then(response=>response.json())
    .then(parsedWeather=>{
        Object.assign(weather,parsedWeather)
    })
}