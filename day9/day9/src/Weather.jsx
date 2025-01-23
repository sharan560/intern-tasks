import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Weather.css';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    

    const fetchWeatherData = async () => {
      try {
        const response = await axios.get('https://api.open-meteo.com/v1/forecast', {
          params: {
            latitude: 40.7128, 
            longitude: -74.0060, 
            current_weather: true,
          },
        });

        setWeatherData({
          location: 'New York',
          temperature: `${response.data.current_weather.temperature}°C`,
          description: 'Sunny', 
          humidity: `${response.data.current_weather.relative_humidity}%`,
          wind: `${response.data.current_weather.windspeed} km/h`,
        });
      } catch (error) {
        console.error("Error fetching weather data", error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      {weatherData ? (
        <div>
          <h2>{weatherData.location}</h2>
          <h3>{weatherData.temperature}</h3>
          <p>{weatherData.description}</p>
          <p>Humidity: {weatherData.humidity}</p>
          <p>Wind: {weatherData.wind}</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default Weather;
