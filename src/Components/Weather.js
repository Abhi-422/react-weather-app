import React, { useState, useEffect } from 'react';

const Weather = () => {
  const [weatherData, setWeatherData] = useState('');
  const [city, setCity] = useState('');
  const apiKey = 'd2465f25134546b7afddfeb4d4063026'; // Replace with your Weatherbit API key

  const fetchWeather =async (city) => {
    const response = await fetch(`https://api.weatherbit.io/v2.0/current?city=${city}&key=${apiKey}`)
    const data = await response.json();
    console.log(data);
    setWeatherData(data);
  };

  // Using useEffect for data fetching
  useEffect(() => {
      fetchWeather('Mumbai');
  }, []);

  if (!weatherData) {
    return <p>Loading...</p>
  }


  const { data } = weatherData;
  const { temp, rh, wind_spd } = data[0];

  return (
    <div>
      <h2>Weather</h2>
      <div className="input">
      <input type="text" value={city} onChange={e => setCity(e.target.value)} placeholder="Enter city name" />
      <button onClick={() =>fetchWeather(city)}>🔍</button>
      </div>
  
      {weatherData && ( // Only display weather if data is available
        <div>
          <h2>Weather in {data[0].city_name}</h2>
          <p>Temperature: {temp}°C</p>
          <p>Humidity: {rh}%</p>
          <p>Wind Speed: {wind_spd} m/s</p>
          <p>Description: {data[0].weather.description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
