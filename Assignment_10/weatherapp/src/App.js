import './App.css';
import React from 'react';
import TopButtons from './component/TopButtons';
import TimeAndLocation from './component/TimeAndLocation';
import TempAndDetails from './component/TempAndDetails';
import Forecast from './component/Forecast';
import getFormattedWeatherData from './services/weatherService';
import { useEffect, useState } from 'react';
import HourlyForecast from './component/HourlyForecast';

function App() {

  const [query, setQuery] = useState({zip: '02120'});
  const [weather, setWeather] = useState(null);
  const [selectedDate, setSelectedDate ] = useState(new Date());

  useEffect(() => {
    const fetchWeather = async() => {
      const data = await getFormattedWeatherData({...query}).then((data) =>{
        setWeather(data);
      });
    }

    fetchWeather();     
  }, [query])

  return (
    <div className="mx-auto max-w-screen-lg mt-2 py-3 px-32 bg-gradient-to-br from-cyan-700 to to-blue-700 h-fit shadow-xl shadow-gray-400">
        <TopButtons />

        { weather && (
          <div>
            <TimeAndLocation weather={weather} />
            <TempAndDetails weather={weather} />

            <Forecast title="Daily forecast" items={weather.list} setSelectedDate={setSelectedDate} />
            <HourlyForecast title="Hourly forecast" items={weather.list} selectedDate={selectedDate} dateStr={undefined} />
          </div>
        )}

    </div>
  );
}

export default App;
