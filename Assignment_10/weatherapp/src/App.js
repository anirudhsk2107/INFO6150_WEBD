import './App.css';
import React from 'react';
import TopButtons from './component/TopButtons';
import TimeAndLocation from './component/TimeAndLocation';
import TempAndDetails from './component/TempAndDetails';
import Forecast from './component/Forecast';
// import getWeatherData from './services/weatherService';
import getFormattedWeatherData from './services/weatherService';
import { useEffect, useState } from 'react';
// import axios from 'axios';, {usetate} 
import UilReact from '@iconscout/react-unicons/icons/uil-react'

function App() {

  const [query, setQuery] = useState({zip: '02120'});
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async() => {
      const data = await getFormattedWeatherData({...query}).then((data) =>{
        console.log("Data: ", data);
        setWeather(data);
      });
      console.log("Data ABCD: ", data);
    }

    fetchWeather();     
  }, [query])

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to to-blue-700 h-fit shadow-xl shadow-gray-400">
        <TopButtons />

        { weather && (
          <div>
            <TimeAndLocation weather={weather} />
            <TempAndDetails weather={weather} />

            <Forecast title="Daily forecast" items={weather.list}  />
          </div>
        )}

    </div>
  );
}

export default App;
