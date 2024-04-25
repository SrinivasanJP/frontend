import axios from 'axios';
import React, { useEffect, useState } from 'react'
import latIcon from "../assets/latIcon.png"
import longIcon from "../assets/longIcon.png"
import sunriselogo from "../assets/sunrise.png"
import sunsetlogo from "../assets/sunset.png"
import temp from "../assets/temp.png"
import {
    GaugeContainer,
    GaugeValueArc,
    GaugeReferenceArc,
    useGaugeState,
    gaugeClasses,
  } from '@mui/x-charts/Gauge';
const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000); // Convert UNIX timestamp to milliseconds
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  };
const WeatherCard = ({ weatherData }) => {
    const {coord, name, sys, main, weather, wind } = weatherData;
  
    const [currentTime, setCurrentTime] = useState(new Date());
    const hour = currentTime.getHours();
  const minute = currentTime.getMinutes();
  const second = currentTime.getSeconds();
  const totalSeconds = (hour * 3600) + (minute * 60) + second;
  const value = (totalSeconds / 86400) * 100;
    return (
      <div className="bg-white text-black shadow-md rounded-md p-6 w-[90%]">
        {/*latitude longitude*/}
        <div className='flex gap-5 justify-center items-center flex-wrap'>
        <div className='flex justify-between bg-lime-200 p-5 rounded-xl items-center md:w-[48%] flex-wrap'>
            <div className='flex'>
            <h1 className=' md:text-2xl font-bold '>Latitude:</h1>
            <h1 className='md:text-3xl'>{coord.lat}</h1>
            </div>
            <img src={latIcon} alt="lat image" />
        </div>
        <div className='flex justify-between bg-lime-200 p-5 rounded-xl items-center md:w-[48%] flex-wrap'>
            <div className='flex'>
            <h1 className=' md:text-2xl font-bold '>Longitude:</h1>
            <h1 className='md:text-3xl'>{coord.lon}</h1>
            </div>
            <img src={longIcon} alt="lat image" />
        </div>
        </div>

        {/* Sunrise and sunset */}
        <div className=' flex justify-evenly items-center bg-lime-200 my-5 rounded-xl p-5 flex-col'>
            <p className='text-justify'>
Farming during daytime offers several advantages for agricultural operations. The availability of natural sunlight during daylight hours is crucial for photosynthesis, enabling plants to produce energy and thrive. Farmers can maximize productivity by utilizing daylight for various tasks such as planting, harvesting, and pest control. Improved visibility during the daytime allows for better assessment of crop conditions and timely intervention. Additionally, daylight farming reduces energy costs associated with artificial lighting and promotes environmental sustainability. Exposure to natural daylight also has positive effects on human health and well-being, contributing to overall productivity and well-being. Overall, farming during daytime provides optimal conditions for plant growth, higher efficiency, and sustainable agricultural practices.</p>
            <div className='flex w-full'>
            <div className='flex flex-col justify-center items-center ml-10'>
                <img src={sunriselogo} alt="" className='w-32'/>
            <h1 className=' text-3xl font-semibold'>Sunrise: {formatTime(sys.sunrise)}</h1>
            </div>
        
        <GaugeContainer
      width={400}
      height={400}
      startAngle={-100}
      endAngle={100}
      value={value}
      cornerRadius={20}
    >
      <GaugeReferenceArc />
      <GaugeValueArc />
    </GaugeContainer>
    <div  className='flex flex-col justify-center items-center ml-10'>
        <img src={sunsetlogo} alt="" className='w-32'/>
    <h1 className=' text-3xl font-semibold'>Sunset: {formatTime(sys.sunset)}</h1>


    </div>
            </div>
            
        </div>

        <div className='flex flex-col justify-center bg-lime-200 p-5 rounded-xl'>
            <h1 className='text-3xl'>Weather</h1>
            <div className='flex justify-around items-center'>
                <div className='flex items-center bg-green-100 px-10 rounded-xl justify-between'>
                <img src={"http://openweathermap.org/img/w/" +weather[0].icon+ ".png"} alt="weather icon" className='mx-5' width={100} />
                <div >
                <h1 className='text-2xl font-semibold'>{weather[0].main}</h1>
                <p>{weather[0].description}</p>
                </div>
                </div>
                <div className='bg-green-100 px-14 rounded-xl py-6 flex'>
                    <img src={temp} alt="" width={70} />
                    <div>
                    <h1 className='text-2xl font-semibold'>Temperature</h1>
                    <p>{main.temp}°C</p>
                    </div>
                    
                </div>
                
                
            </div>
        </div>


        <h2 className=" bg-lime-200 my-5  p-5 rounded-xl text-2xl font-bold mb-4">Area: {name}, {sys.country}</h2>
        <div className=" bg-lime-200 p-5 rounded-xl grid grid-cols-2 gap-4">
          <div>
            <p className="text-lg font-semibold mb-2">Temperature</p>
            <p>{main.temp}°C</p>
          </div>
          <div>
            <p className="text-lg font-semibold mb-2">Feels Like</p>
            <p>{main.feels_like}°C</p>
          </div>
          <div>
            <p className="text-lg font-semibold mb-2">Humidity</p>
            <p>{main.humidity}%</p>
          </div>
          <div>
            <p className="text-lg font-semibold mb-2">Pressure</p>
            <p>{main.pressure} hPa</p>
          </div>
          <div>
            <p className="text-lg font-semibold mb-2">Weather</p>
            <p>{weather[0].description}</p>
          </div>
          <div>
            <p className="text-lg font-semibold mb-2">Wind Speed</p>
            <p>{wind.speed} m/s</p>
          </div>
        </div>
      </div>
    );
  };

const WeatherComponent = () => {
    const [geolocations, setGeolocations] = useState({ latitude: "Loading...", longitude: "Loading..." });
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const [weatherData, setWeatherData] = useState(null);
  
    useEffect(() => {
        console.log("running")
      // Fetch geolocation using Geolocation API
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setGeolocations({ latitude: latitude.toFixed(2), longitude: longitude.toFixed(2) });
          setIsLoading(false);
          console.log(latitude,longitude)
        //   fetchWeatherData(latitude, longitude);
        setWeatherData({
            "coord": {
                "lon": 80.1415,
                "lat": 12.8522
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "base": "stations",
            "main": {
                "temp": 29.92,
                "feels_like": 34.84,
                "temp_min": 29.92,
                "temp_max": 29.92,
                "pressure": 1010,
                "humidity": 70
            },
            "visibility": 6000,
            "wind": {
                "speed": 4.63,
                "deg": 130
            },
            "clouds": {
                "all": 40
            },
            "dt": 1711283569,
            "sys": {
                "type": 1,
                "id": 9218,
                "country": "IN",
                "sunrise": 1711240850,
                "sunset": 1711284623
            },
            "timezone": 19800,
            "id": 1465868,
            "name": "Vengavasal",
            "cod": 200
        })
        },
        (error) => {
          setIsLoading(false);
          setErrorMessage('Error fetching geolocation: ' + error.message);
        }
      );
    }, []);
  
    const fetchWeatherData = async (latitude, longitude) => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=ab3d349d1a0ab2c4f3a14e8bc614cb9a&units=metric`);
        setWeatherData(response.data);
      } catch (error) {
        setErrorMessage('Error fetching weather data: ' + error.message);
        console.log(error)
      }
    };
  return (
    <div className="flex justify-center items-center">
      {isLoading ? (
        <p>Loading...</p>
      ) : errorMessage ? (
        <p>{errorMessage}</p>
      ) : weatherData ? (
        <WeatherCard weatherData={weatherData} /> 
      ) : null}
    </div>
  )
}

export default WeatherComponent