import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css'

export default function InfoBox({info}){
    const COLD_URL="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1507027682794-35e6c12ad5b4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className='infobox'>
                <Card sx={{ maxWidth: 345 }}>
        <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 
            ? RAIN_URL
            :info.temp   >15 
            ? HOT_URL 
            :COLD_URL
        }
        title="Weather image"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            <p className='city'>{info.city}.&nbsp;</p>
            {info.humidity > 80 
            ? <i class="fa-solid fa-cloud-rain"></i>
            :info.temp   >15 
            ? <i class="fa-solid fa-sun"></i>
            :<i class="fa-solid fa-snowflake"></i>
        }
        </Typography>
        <Typography variant="body2" color="text.secondary" className='infoo'>
            <p>Temparature :{info.temp}&deg;C </p>
            <p>Humidity : {info.humidity}&deg;C</p>
            <p>Min Temp :{info.tempMin} &deg;C</p>
            <p>Max Temp :{info.tempMax}&deg;C</p>
            <p>Weather Feels like {info.humidity    }&deg;C</p>
            <p> Weather Described as {info.description} </p>
        </Typography>
        </CardContent>
        </Card>
        </div>
    )
}