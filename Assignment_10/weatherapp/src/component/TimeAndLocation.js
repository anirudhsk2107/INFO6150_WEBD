import React from 'react'

function TimeAndLocation({weather: {city}}) {

    const now = new Date();
    const month = now.toLocaleString('default', { month: 'long' });
    const day = now.getDate();
    const year = now.getFullYear();
    const time = now.toLocaleTimeString();
    const dateTimeString = `${month} ${day} ${year} | Time: ${time}`;
    console.log(dateTimeString);

    return (
      <div>
          <div className='flex items-center justify-center my-6'>
            <p className='text-white text-xl font- extralight'>
                {dateTimeString}
            </p>
          </div>

          <div className='flex items-center justify-center my-3 '>
            <p className='text-white text-3xl font- font-medium'>
                {city.name + ", " + city.country}
            </p>
          </div>
      </div>
    ) 
}

export default TimeAndLocation