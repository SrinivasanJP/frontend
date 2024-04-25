import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherComponent from './WeatherComponent';

const Dashboard = () => {
  return (
    <div className='w-full-1 h-screen rounded-lg text-white'>
      <div className='flex justify-start h-screen items-center '>
        <div className='bg-gradient-to-tr to-[#56ab2f] from-[#a8e06388] w-[90%] md:w-[70%] lg:w-[60%] p-10 rounded-e-2xl'>
          <h1 className='text-2xl font-extrabold mb-10'>Welcome to Techno Farm: Revolutionizing Agriculture with Data Science</h1>
          <p className='font-semibold'>Welcome to Techno Farm, a groundbreaking agricultural platform at the forefront of the digital farming revolution. By harnessing the power of data science and cutting-edge technologies, we're empowering farmers worldwide to navigate the complexities of modern agriculture with confidence and precision. Our platform offers personalized recommendations for crop management, irrigation, pest control, and market forecasting, tailored to meet the unique needs of each farmer. <span className='hidden lg:block'>With real-time data insights and advanced analytics, farmers can optimize resources, maximize yields, and minimize risks, driving productivity and profitability like never before. Through predictive algorithms and machine learning, Techno Farm anticipates challenges, identifies opportunities, and empowers farmers to make proactive decisions for future success. Join us in embracing the transformative potential of data-driven agriculture and together, let's cultivate a sustainable and prosperous future for farming communities around the globe.</span></p>
        </div>
      </div>
      <section className="mt-10">
        
      </section>
    </div>
  );
};

export default Dashboard;
