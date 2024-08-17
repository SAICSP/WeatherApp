import { useState } from 'react'
import InfoBox from './InfoBox'
import SearchBox from './SearchBox'
import './WeatherApp.css'
export default function WeatherApp(){
    let [weather,setweather]=useState({
        city:"Vikarabad",
        feelslike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze",
    })

    let updateInfo =  (res) => {
        setweather(res);
    }

    return (
        <div className="weatherapp"> 
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weather}/>
        </div>
    )
}