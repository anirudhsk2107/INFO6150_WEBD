const API_KEY = '05fc4f6ce8119188896b5448edeb0cfb';
const URL_BASE = 'https://api.openweathermap.org/data/2.5';

const getWeatherData = (infoType, searchParams) => {
    
    const url = new URL(URL_BASE + '/' + infoType);
    url.searchParams.append('zip', searchParams.zip + ',us');
    url.searchParams.append('appid', API_KEY);
    url.searchParams.append('units', 'imperial');

    return fetch(url)
        .then((res) => res.json());
};

const formatForecastWeather = (data) => {
    let { list, city, sunrise, sunset } = data;

    list = list.slice(0,40).map(d => {
        return {
            temp: d.main.temp,
            temp_max: d.main.temp_max,
            temp_min: d.main.temp_min,
            humidity: d.main.humidity,
            weather: d.weather[0].main,
            icon: d.weather[0].icon,
            wind: d.wind.speed,
            date: d.dt_txt,
            feels_like: d.main.feels_like,
            daily_dt: d.dt
        }
    });

    return { list, city, sunrise, sunset };
};

const iconUrlFromCode = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`;

const  getFormattedWeatherData = async (searchParams)  => {
    const formattedCurrentWeather = await getWeatherData('forecast', searchParams).then(formatForecastWeather);
    return formattedCurrentWeather ;
}

export default getFormattedWeatherData;
export { iconUrlFromCode };
