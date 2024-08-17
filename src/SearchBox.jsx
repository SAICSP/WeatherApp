import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import './SearchBox.css'
import { useState } from 'react';
export default function SearchBox({updateInfo}){

    let [city,setcity]=useState("");
    let [error,seterror]=useState(false);
    const URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="5e9c818cf63f20898b375d68bb461662";

let getWeatherInfo=async()=>{
try{
let response=await fetch(`${URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse=await response.json();
        console.log(jsonResponse);
        let res={
            city:city,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feels_like,
            description:jsonResponse.weather[0].description,
        };
        console.log(res);
        return res;
        }
        catch(error){
        throw(error);
    }
    }
    

    let handleChange=(event)=>{
        setcity(event.target.value);
    }

    let handleSubmit=async(event)=>{
        try{
            event.preventDefault();
        console.log(city);
        setcity("");
        let data=await getWeatherInfo();
        updateInfo(data);
        }
        catch{
            seterror(true);
        }
        
    }

    return (
        <div className='searchbox'>
            <br />
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City" variant="outlined" required value={city}  onChange={handleChange}/><br /><br />
            <Button variant="contained" type="submit    ">Search</Button>
            {error && <p style={{color:"red"}}>City not found!</p>}
            </form>
        </div>
    )
}