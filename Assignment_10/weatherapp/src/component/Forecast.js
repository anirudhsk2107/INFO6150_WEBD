import React from 'react';
import Cloud from './images/cloudy.png';
import Rain from './images/rainy.png';
import Snow from './images/snow.png';
import Sunny from './images/sunny.png';
import { iconUrlFromCode } from "../services/weatherService";
import { Link } from 'react-router-dom';

function Forecast({title, items}) {
    
    const filteredItems = [];
    let lastDay = null;
    let daysShown = 0;
  
    for (let i = 0; i < items.length && daysShown < 5; i++) {
      const item = items[i];
      const date = new Date(item.date);
      const day = date.getDate();
  
      if (day !== lastDay) {
        filteredItems.push(item);
        lastDay = day;
        daysShown++;
      }
    }

  
    return (
      <div>
        <div className='flex items-center justify-start mt-6'>
          <p className='text-white font-medium uppercase'>{title}</p>
        </div>
  
        <hr className='my-2'/>
  
        <div className='flex flex-row items-center justify-between text-white'>
          {filteredItems.map(item => (
            <div className='flex flex-col items-center justify-center' key={item.date}>
              <p className='font-light text-sm'>
                {formatDate(item.date)}
              </p>
              <img src={iconUrlFromCode(item.icon)} className='w-12 my-1'/>
            <button className='font-medium' >{`${item.temp.toFixed()}°`}F</button>
              
            </div>
          ))}
        </div>
      </div>
    );
}
  
const formatDate = (dateVal) => {
    console.log(dateVal);
    const dateStr = dateVal;
    const date = new Date(dateStr);
    const dayOfWeek = new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(date);
    console.log(dayOfWeek);
    return dayOfWeek;
}

export default Forecast