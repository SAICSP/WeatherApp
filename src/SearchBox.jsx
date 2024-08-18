import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {

    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const URL = "https://api.openweathermap.org/data/2.5/weather";
    const key = "5e9c818cf63f20898b375d68bb461662"; // The API key should not be in the code directly; consider using environment variables.

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${URL}?q=${city}&appid=${key}&units=metric`);
            if (!response.ok) {
                throw new Error("City not found");
            }
            let jsonResponse = await response.json();
            let res = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                description: jsonResponse.weather[0].description,
            };
            return res;
        } catch (error) {
            throw error;
        }
    };

    let handleChange = (event) => {
        setCity(event.target.value);
        setError(false); // Reset the error on new input
    };

    let handleSubmit = async (event) => {
        event.preventDefault();
        try {
            let data = await getWeatherInfo();
            updateInfo(data);
            setCity(""); // Clear the input field after submission
        } catch (error) {
            setError(true);
        }
    };

    return (
        <div className='searchbox'>
            <br />
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City" variant="outlined" required value={city} onChange={handleChange} /><br /><br />
                <Button variant="contained" type="submit">Search</Button>
                {error && <p style={{ color: "red" }}>City not found!</p>}
            </form>
        </div>
    );
}
