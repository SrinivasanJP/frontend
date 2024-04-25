import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import CropInfoBlock from './CropInfoBlock';

const CropRecommend = () => {
  const [formData, setFormData] = useState({
    N: '',
    P: '',
    K: '',
    temperature: '',
    humidity: '',
    ph: '',
    rainfall: ''
  });
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [error, setError] = useState(null);
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          setError(null);
        },
        (error) => {
          setError('Error occurred while retrieving location.');
          console.error('Error occurred while retrieving location:', error);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
      console.error('Geolocation is not supported by this browser.');
    }
  };
  useEffect(() => {
    getLocation();
  }, []);

  const [prediction, setPrediction] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/cropRecommend', formData);
      setPrediction(response.data);
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  return (
    <div className=' mt-20 p-5 w-[70%] xl:w-[60%] flex flex-col mx-auto bg-gradient-to-tr from-lime-400  to-green-200 rounded-xl '>
      <h1 className=' bg-gradient-to-tr from-[#56ab2f] to-[#a8e063] inline-block p-5 font-bold text-white text-2xl rounded-xl'>Crop Suggestion</h1>
      <div className='flex justify-between lg:flex-row flex-col mt-10'>

      <div className='m-5 lg:w-[45%] text-justify bg-lime-200 p-5 rounded-xl text-lime-900 '>
      <h2>Before You Begin:</h2>
      <ol>
        <li>
          <strong>Accuracy:</strong> Provide accurate details about your land to receive relevant crop suggestions. Inaccurate information may lead to inappropriate recommendations.
        </li>
        <li>
          <strong>Land Details:</strong> Include soil type, climate conditions, water resources, altitude, etc. The more detailed, the better the recommendations.
        </li>
        <li>
          <strong>Considerations:</strong> Mention any specific constraints or goals such as organic practices, sustainability, or crop rotation.
        </li>
        <li>
          <strong>Future Plans:</strong> Share any future plans for your land like expansion, diversification, or investment in irrigation systems.
        </li>
        <li>
          <strong>Expert Consultation:</strong> While this tool provides insights, consulting with agricultural experts or local extension services is advisable.
        </li>
        <li>
          <strong>Privacy:</strong> Your data will be used solely for generating crop recommendations and will not be shared without consent.
        </li>
        <li>
          <strong>Feedback:</strong> Your feedback is valuable. If you have suggestions or encounter issues, please reach out to us.
        </li>
      </ol>
      <p>Thank you for using our land assessment tool. Please proceed to enter your land details for personalized crop suggestions.</p>
    </div>
      <form onSubmit={handleSubmit} className="flex lg:w-[45%] flex-col space-y-4">
        <label className="text-xl">Nitrogen content:</label>
        <input type="text" name="N" value={formData.N} onChange={handleChange} className="p-2 rounded-xl border border-gray-400 focus:outline-none focus:border-green-500" /><br />
        <label className="text-xl">Phosphorous content:</label>
        <input type="text" name="P" value={formData.P} onChange={handleChange} className="p-2 rounded-xl border border-gray-400 focus:outline-none focus:border-green-500" /><br />
        <label className="text-xl"> Potassium content:</label>
        <input type="text" name="K" value={formData.K} onChange={handleChange} className="p-2 rounded-xl border border-gray-400 focus:outline-none focus:border-green-500" /><br />
        <label className="text-xl">Temperature:</label>
        <input type="text" name="temperature" value={formData.temperature} onChange={handleChange} className="p-2 rounded-xl border border-gray-400 focus:outline-none focus:border-green-500" /><br />
        <label className="text-xl">Humidity:</label>
        <input type="text" name="humidity" value={formData.humidity} onChange={handleChange} className="p-2 rounded-xl border border-gray-400 focus:outline-none focus:border-green-500" /><br />
        <label className="text-xl">pH:</label>
        <input type="text" name="ph" value={formData.ph} onChange={handleChange} className="p-2 rounded-xl border border-gray-400 focus:outline-none focus:border-green-500" /><br />
        <label className="text-xl">Rainfall:</label>
        <input type="text" name="rainfall" value={formData.rainfall} onChange={handleChange} className="p-2 rounded-xl border border-gray-400 focus:outline-none focus:border-green-500" /><br />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-700 focus:outline-none focus:bg-green-700 transition duration-300 ease-in-out">Predict</button>
      </form>
      </div>
    
      {prediction && (
          <div className='flex mt-8 flex-wrap gap-4'>
          <div className=' flex bg-lime-200 p-5 justify-evenly items-center xl:flex-col rounded-xl xl:w-[48%] w-full md:text-3xl  h-52'>
            <h1 className=' mg:text-3xl font-semibold'>Suggested Crop: </h1>
            <h2>{prediction.class}</h2>
          </div>
          <div className=' flex bg-lime-200 p-5  justify-center items-center rounded-xl xl:w-[48%] w-full md:text-3xl h-52'>
            <h1 className=' mg:text-3xl font-semibold md:ms-10 xl:ms-0'>Confidence: </h1>
          <Gauge
      width= {200}
      height= {200}
      cornerRadius="30%"
      value={prediction.confidence*100}
      sx={(theme) => ({
        [`& .${gaugeClasses.valueText}`]: {
          fontSize: 40,
        },
        [`& .${gaugeClasses.valueArc}`]: {
          fill: '#56ab2f',
        },
        [`& .${gaugeClasses.referenceArc}`]: {
          fill: "#ffffff",
        },
      })}
    />
          </div>
          
          {<CropInfoBlock crop ={ prediction.class} />}
          </div>

      
      )}
      
    </div>
  );
};

export default CropRecommend;
