import React from 'react'
import { iconUrlFromCode } from "../services/weatherService";

function HourlyForecast({title, items, selectedDate, dateStr = undefined}) {
    let formattedDate = selectedDate.toString();
    let dateString = formattedDate;
    let dateObj = new Date(dateString);
    let year = dateObj.getFullYear();
    let month = dateObj.getMonth() + 1;
    let day = dateObj.getDate();
    
    formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    formattedDate = formattedDate.toString();

    const filteredItems = [];
    const today = new Date();
    let itemsShown = 0;
    let date = new Date();
  
    for (let i = 0; i < items.length && itemsShown < 5; i++) {
        const item = items[i];
        let flag = false;

        if (selectedDate == undefined){
            date = new Date(item.date);
            flag = true;
        } else {
            if( item.date.substring(0, 10) == formattedDate){
                date = new Date(formattedDate);
                flag = true;
            }
        }
        
        if(flag){
            filteredItems.push(item);
            itemsShown++;
        }
    }
  
    return (    
      <div className='mb-10'>
        <div className='flex items-center justify-start mt-6'>
          <p className='text-white font-medium uppercase'>{title}</p>
        </div>
  
        <hr className='my-2'/>
  
        <div className='flex flex-row items-center justify-between text-white'>
          {filteredItems.map(item => (
            <div className='flex flex-col items-center justify-center' key={item.date}>
                
                <p className='font-light text-sm'>{formatTime(item.date)}</p>
                <img src={iconUrlFromCode(item.icon)} className='w-12 my-1'/>
                <p className='font-medium' >{`${item.temp.toFixed()}°`}F</p>
              
            </div>
          ))}
        </div>
      </div>
    );  

}


const formatTime = (dateVal) => {
    const date = new Date(dateVal);

    const options = {
      hour: "numeric",
      minute: "numeric",
      hour12: true
    };

    const timeStr = date.toLocaleTimeString("en-US", options);
    return timeStr;
}

export default HourlyForecast