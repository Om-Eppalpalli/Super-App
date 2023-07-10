import React, { useEffect, useState } from 'react';
import './UserPage.css';

const apiKey = '3265874a2c77ae4a04bb96236a642d2f';
const defaultCity = 'Mumbai';
const currentDate = new Date();

// Get the date components
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();

// Get the time components
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

// Format the date and time strings
const formattedDate = `${day}/${month}/${year}`;
const formattedTime = `${hours}:${minutes}:${seconds}`;

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [lat, setLatitude] = useState(null);
  const [lon, setLongitude] = useState(null);

  useEffect(() => {
    fetchLocation();
  }, []);

  useEffect(() => {
    if (lat && lon) {
      fetchWeather();
    }
  }, [lat, lon]);

  const fetchLocation = async () => {
    try {
      const response = await fetch('https://ipinfo.io/json?token=1286da3b44f0d0');
      const data = await response.json();

      const [latitude, longitude] = data.loc.split(',');
      setLatitude(latitude);
      setLongitude(longitude);

      setCurrentLocation(data.city);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const fetchWeather = async () => {
    try {
      let weatherURL;
      if (lat && lon) {
        weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
      } else {
        weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${defaultcity}&appid=${apiKey}&units=metric`;
      }

      const response = await fetch(weatherURL);
      const data = await response.json();
      console.log(data);
      setCurrentLocation(data.name);
      setWeather(data);
    } catch (error) {
      console.log('Error fetching weather data:', error);
    }
  };


  return (
    <div>
      {weather ? (
        <div id="time_weather">
          <div id="time_date">
            <span>{formattedDate}</span>
            <span>{formattedTime}</span>
          </div>
          <div id="weather_data">
            <span>{currentLocation || defaultCity}</span>
            <span>{weather.main.temp}°C</span>
            <span>{weather.main.pressure} mbar<br />Pressure</span>
            <span>{weather.wind.speed} km/h<br />Wind</span>
            <span>{weather.main.humidity}%<br />Humidity</span>
          </div>
        </div>
      ) : (
        <span>No weather data available.</span>
      )}
    </div>
  );
};

export default WeatherWidget;
