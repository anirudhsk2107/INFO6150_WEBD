import React from 'react'
import Cloud from './images/cloudy.png';
import Rain from './images/rainy.png';
import Snow from './images/snow.png';
import Sunny from './images/sunny.png';
import Temp from './images/temp.png';
import Humid from './images/humidity.png';
import Wind from './images/wind.png';
import Sunrise from './images/sunrise.png'
import Sunset from './images/sunset.png'
import High from './images/high.png'
import Low from './images/low.png'
import { iconUrlFromCode } from "../services/weatherService";


var todayWthrImg = {
    width: "20%"
}


function TempAndDetails({weather: {
    list, city, sunrise, sunset
}}) {

    const icon = list[0].icon;

  return (
    <div>
        <div className='flex item-center justify-center  py-6 text-xl text-cyan-300'>
            <p>{list[0].weather}</p>
        </div>

        <div className='flex flex-row item-center justify-between py-3 text-white'>
            <img src={iconUrlFromCode(list[0].icon)} alt='sunny image' style={todayWthrImg}/>
            <p className='text-5xl m-3'>{`${list[0].temp.toFixed()}°`}F</p>
            <div className='flex flex-col space-y-2'>
                <div className='flex font-light text-sm items-center justify-center '>
                    <img src={Temp} alt='' className='mr-1 w-5'/>
                    Real Feel:
                    <span className='font-medium ml-1'>{`${list[0].feels_like.toFixed()}°`}</span>
                </div>

                <div className='flex font-light text-sm items-center justify-center '>
                    <img src={Humid} alt='Humidity' className='mr-1 w-5'/>
                    Humidity: 
                    <span className='font-medium ml-1'>{`${list[0].humidity.toFixed()}%`}</span>
                </div>

                <div className='flex font-light text-sm items-center justify-center '>
                    <img src={Wind} alt='Wind' className='mr-1 w-5'/>
                    Wind:
                    <span className='font-medium ml-1'>{`${list[0].wind.toFixed()}km/h`}</span>
                </div>
            </div>
        </div>

        <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3 '>
            <img src={Sunrise} alt='sunrise' className='w-6'/>
            <p className='font-light'>Rise: <span>07:00 AM</span></p>
            <p className='font-light'>|</p>

            <img src={Sunset} alt='sunset' className='w-6'/>
            <p className='font-light'>Set: <span>07:00 PM</span></p>
            <p className='font-light'>|</p>

            <img src={High} alt='sunrise' className='w-6'/>
            <p className='font-light'>High: <span>{`${list[0].temp_max.toFixed()}°`}</span></p>
            <p className='font-light'>|</p>

            <img src={Low} alt='sunrise' className='w-6'/>
            <p className='font-light'>Low: <span>{`${list[0].temp_min.toFixed()}°`}</span></p> 
        </div>
    </div>
  ) 
}

export default TempAndDetails 