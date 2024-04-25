import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LeafSVG from "../assets/leaf.svg"
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

const LateBlightRemedies = () => {
  return (
    <div className=' mt-10 bg-lime-200 p-3 rounded-xl'>
      <h2 className=' bg-[#56ab2f] p-4 text-2xl font-bold rounded-xl text-white'>Late Blight Remedies and Preventive Measures</h2>
      <ol className='space-y-6 mt-8'>
        <li>
          <strong>Cultural Practices:</strong>
          <ul className='ml-4 space-y-2'>
            <li><strong>Crop Rotation:</strong> Avoid planting tomatoes or potatoes in the same area year after year.</li>
            <li><strong>Proper Spacing:</strong> Provide adequate spacing between plants to ensure good air circulation.</li>
            <li><strong>Remove Infected Plants:</strong> Promptly remove and destroy infected plants.</li>
          </ul>
        </li>
        <li>
          <strong>Fungicides:</strong>
          <ul className='ml-4 space-y-2'>
            <li><strong>Copper-Based Fungicides:</strong> Apply according to the manufacturer's instructions.</li>
            <li><strong>Biofungicides:</strong> Consider using biofungicides containing beneficial microbes or plant extracts.</li>
          </ul>
        </li>
        <li>
          <strong>Resistant Varieties:</strong> Choose tomato and potato varieties that are resistant to late blight.
        </li>
        <li>
          <strong>Mulching:</strong> Apply mulch around plants to maintain soil moisture levels and prevent soil splashing.
        </li>
        <li>
          <strong>Proper Watering:</strong> Avoid overhead watering and water at the base of plants early in the day.
        </li>
        <li>
          <strong>Monitoring:</strong> Regularly inspect plants for signs of late blight.
        </li>
        <li>
          <strong>Sanitation:</strong> Clean garden tools and equipment after each use.
        </li>
        <li>
          <strong>Weather Monitoring:</strong> Be vigilant during periods of cool, wet weather.
        </li>
        <li>
          <strong>Foliar Sprays:</strong> Consider using organic solutions such as neem oil or baking soda solutions.
        </li>
        <li>
          <strong>Professional Advice:</strong> Seek advice from local agricultural extension services or a professional agronomist if needed.
        </li>
      </ol>
    </div>
  );
};
const EarlyBlightSuggestions = () => {
  return (
    <div className=" mt-10 bg-lime-200 p-3 rounded-xl">
      <h2 className="text-2xl font-bold mb-4  bg-[#56ab2f] p-4 rounded-xl text-white">Early Blight Management Suggestions</h2>
      <ol className="list-decimal list-inside space-y-4">
        <li>
          <strong>Cultural Practices:</strong>
          <ul className="ml-4 space-y-2">
            <li><strong>Crop Rotation:</strong> Rotate crops to avoid planting tomatoes or potatoes in the same area for consecutive years.</li>
            <li><strong>Spacing:</strong> Plant with proper spacing to ensure adequate airflow between plants.</li>
            <li><strong>Remove Infected Leaves:</strong> Promptly remove and destroy infected leaves to prevent further spread.</li>
          </ul>
        </li>
        <li>
          <strong>Fungicides:</strong>
          <ul className="ml-4 space-y-2">
            <li><strong>Apply Fungicides:</strong> Use fungicides labeled for early blight prevention, following the manufacturer's instructions.</li>
            <li><strong>Organic Options:</strong> Consider organic fungicides such as copper-based sprays or neem oil.</li>
          </ul>
        </li>
        <li>
          <strong>Resistant Varieties:</strong> Choose tomato and potato varieties that are resistant to early blight when available.
        </li>
        <li>
          <strong>Mulching:</strong> Apply mulch around plants to prevent soil splashback onto leaves, which can spread the disease.
        </li>
        <li>
          <strong>Proper Watering:</strong> Water at the base of plants in the morning to allow foliage to dry throughout the day, reducing humidity levels favorable to fungal growth.
        </li>
        <li>
          <strong>Avoid Overhead Irrigation:</strong> Minimize overhead watering to prevent splashing of soil onto leaves.
        </li>
        <li>
          <strong>Remove Plant Debris:</strong> Keep the garden clean by removing plant debris and fallen leaves regularly.
        </li>
        <li>
          <strong>Avoid High Nitrogen Fertilizers:</strong> Use balanced fertilizers with lower nitrogen content to prevent lush, susceptible growth.
        </li>
        <li>
          <strong>Incorporate Potassium:</strong> Potassium-rich fertilizers can help strengthen plant cell walls and improve disease resistance.
        </li>
        <li>
          <strong>Professional Consultation:</strong> If the disease persists despite preventive measures, consult with local agricultural extension services or a professional agronomist for tailored recommendations.
        </li>
      </ol>
    </div>
  );
};
const PredictionForm = () => {
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {

    event.preventDefault();
    
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:8000/predictImage', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });

      setPrediction(response.data);
      const confidenceData = localStorage.getItem("confidenceData")
      let confidenceArray = confidenceData ? JSON.parse(confidenceData) : [];
      console.log(confidenceArray)
      confidenceArray = [...confidenceArray, response.data.confidence];
      
localStorage.setItem("confidenceData", JSON.stringify(confidenceArray));
      const predictionData = {
        prediction: response.data,
        imageUrl: URL.createObjectURL(file)
      };
      localStorage.setItem('predictionResult', JSON.stringify(predictionData));
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  return (
    <div className=' mt-20 p-5 w-[70%] xl:w-[60%] flex flex-col mx-auto bg-gradient-to-tr from-lime-400  to-green-200 rounded-xl '>
      <h1 className=' bg-gradient-to-tr from-[#56ab2f] to-[#a8e063] inline-block p-5 font-bold text-white text-2xl rounded-xl'>Plant Diagnosis</h1>
      <p className='m-5 text-justify bg-lime-200 p-5 rounded-xl text-lime-900'>Note: 
Kindly submit an image depicting the afflicted plant leaf to facilitate the diagnosis process by our model. Upon identification of the disease, we will furnish you with comprehensive recommendations and strategies to effectively mitigate its spread and safeguard the health of your plants.
      </p>
      
      
      <form onSubmit={handleSubmit} className='flex justify-center flex-col items-center'>
        <div className='flex justify-between items-center flex-col-reverse'>
          <label htmlFor='file' className=' cursor-pointer bg-slate-100 inline-block p-3 rounded-xl text-center mt-5 text-xl font-semibold'>Choose Your image</label>
        <input type="file" required id='file' onChange={handleFileChange} accept="image/*" className='hidden' />
        
        <img src={file && URL.createObjectURL(file) || LeafSVG} className=" w-80 h-80 bg-slate-100 rounded-xl"  />
        </div>
        <button type="submit" className='bg-gradient-to-tr from-[#56ab2f] to-[#a8e063] inline-block p-5 font-bold text-white text-2xl rounded-xl w-full mt-10 md:w-[70%]'>Predict</button>

       
      </form>
      {prediction && (
        <div>
          
          <div className='flex flex-wrap gap-4 mt-10'>
          <div className=' flex bg-lime-200 p-5 justify-evenly flex-col rounded-xl xl:w-[48%] w-full md:text-3xl  h-52'>
            <h1 className=' mg:text-3xl font-semibold'>Plant Condition: </h1>
            <h2>{prediction.class}</h2>
          </div>
          <div className=' flex bg-lime-200 p-5 justify-between items-center rounded-xl xl:w-[48%] w-full md:text-3xl h-52'>
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
          </div>
          {prediction.class=="Early Blight"?<EarlyBlightSuggestions/>:<LateBlightRemedies />}
       
        </div>
      )}
      
    </div>
  );
};

export default PredictionForm;
