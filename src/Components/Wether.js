import React from 'react'
import { useEffect } from 'react';
import Clear from '../assests/images/clear.jpg'
import s from '../assests/images/s.jpg'

export default function Wether() {

    
    const weatherApi = {
        key:"d72729578543cfc435344f99b226b1c9",
        baseUrl: "https://api.openweathermap.org/data/2.5/weather",  
    }
    
    useEffect(() => {
        document.body.style.backgroundImage = s;
          const searchInputBox = document.getElementById('input-box');
        searchInputBox.addEventListener('keypress', (event) => {
        
            if(event.keyCode === 13) {
                console.log(searchInputBox.value);
                getWeatherReport(searchInputBox.value);
                document.querySelector('.weather-body').style.display = "block";
            }
          });
      }, [getWeatherReport])
      
    
      async function getWeatherReport(city) {
        await fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
        .then(weather => {
            return weather.json();
        }).then(showWeatherReport);
      }
     
      function showWeatherReport(weather){
        console.log(weather);
      
        let city = document.getElementById('city');
        city.innerText = `${weather.name}, ${weather.sys.country}`;
      
        let temperature = document.getElementById('temp');
        temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;
      
        let minMaxTemp = document.getElementById('min-max');
        minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max) `;
      
        let weatherType = document.getElementById('weather');
        weatherType.innerText = `${weather.weather[0].main}`;
      
        let date = document.getElementById('date');
        let todayDate = new Date();
        date.innerText = dateManage(todayDate);
      
        if(weatherType.textContent == 'Clear') {
            document.body.style.backgroundImage = Clear;
            
        } else if(weatherType.textContent == 'Clouds') {
      
            document.body.style.backgroundImage = "url('images/cloud.jpg')";
            
        } else if(weatherType.textContent == 'Haze') {
      
            document.body.style.backgroundImage = "url('images/haze.jpg')";
            
        }     else if(weatherType.textContent == 'Rain') {
            
            document.body.style.backgroundImage = "url('images/rain.jpg')";
            
        } else if(weatherType.textContent == 'Snow') {
            
            document.body.style.backgroundImage = "url('images/snow.jpg')";
        
        } else if(weatherType.textContent == 'Thunderstorm') {
        
            document.body.style.backgroundImage = "url('images/thunderstorm.jpg')";
            
        } 
      }
      
     
      function dateManage(dateArg) {
      
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      
        let year = dateArg.getFullYear();
        let month = months[dateArg.getMonth()];
        let date = dateArg.getDate();
        let day = days[dateArg.getDay()];
      
        return `${date} ${month} (${day}), ${year}`;
      }
    

  return (
    <div className='w'  Style={{
        backgroundImage: `url(${s})` ,
        height:'100vh',
        // marginTop:'-70px',
        // fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }} >

    <div className="container">
        <h1 className='py-4'> WEATHER DETAILS</h1>
        <br/>
        <h2>1.Date(Day),Year</h2>
        <br/>
        <h2>2.Temparature</h2>
        <br/>
        <h2>3.Maximum and Minimum temperature</h2>
        <br/>
        <h2>4.Weather Condition</h2>


    </div>
    <div className="app-main">
        <div className="searchInputBox">
            <input type="text" id="input-box" className="input-box" placeholder="ENTER CITY NAME"  />
        </div>

        <div className="weather-body">
            <div className="location-details">
                <div className="city" id="city"></div>
                <div className="date" id="date"></div>
            </div>

            <div className="weather-status">
                <div className="temp" id="temp"></div>
                <div className="min-max" id="min-max"></div>
                <div className="weather" id="weather"></div>
                <div id="img"></div>
            </div>
        </div>
    </div>

        
    </div>
  )
}
