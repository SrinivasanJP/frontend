import React, { useEffect, useState } from 'react'
import { LineChart } from '@mui/x-charts/LineChart';
import leaf from "../assets/leaf.svg"
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

const getLoacalData = (setLocalData) =>{
    const diagnosisData = JSON.parse(localStorage.getItem('predictionResult'));
    const confidenceData = JSON.parse(localStorage.getItem("confidenceData")).map(Number)
    setLocalData(pre => ({...pre,diagnosisData:diagnosisData, confidenceData:confidenceData})) 
}

  const dataset = [
    {
        noOfPredition:40,
        class:"healthy"
    },
    {
        noOfPredition:10,
        class:"Late Blight"
    },
    {
        noOfPredition:20,
        class:"Early Blight"
    },

  ];
  const datasetLand = [
    
    {
        content:90,
        class:"Nitrogen"
    },{
        content:42,
        class:"Phosphorous"
    },{
        content:43,
        class:"Potassium"
    },{
        content:20.8793,
        class:"Temperature"
    },{
        content:80,
        class:"Humidity"
    },{
        content:6,
        class:"PH"
    },{
        content:23,
        class:"RainFall"
    },
  ]
  
  const valueFormatter = (value) => `${value}mm`;
  
  const chartSetting = {
    yAxis: [
      {
        label: 'No. of the test',
      },
    ],
    series: [{dataKey:"noOfPredition",label: 'Complete Plant Diagnosis data', valueFormatter, }],
    height: 300,
    sx: {
      [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
        transform: 'translateX(-10px)',
      },
    },
  };
  
const Analytics = () => {
    const [localData,setLocalData] = useState([])
    useEffect(()=>{
        getLoacalData(setLocalData)
        console.log(Array.from({ length: localData?.confidenceData?.length}, (_, index) => index + 1)) 
    },[])
  return (
    <div className='flex flex-col mx-auto my-5 bg-white text-black shadow-md rounded-md p-6 w-[90%]'>
        <h1 className=' bg-lime-200 p-5 rounded-xl font-bold text-3xl'>Previous Diagnosis data: </h1>
        <div className='bg-white p-5 rounded-xl'>
        <div>
          <div className='flex flex-wrap gap-4'>
          <div className=' flex bg-lime-200 p-5 justify-evenly items-center rounded-xl w-full md:text-3xl '>
            <div className='px-10'>
            <h1 className=' mg:text-3xl font-semibold text-2xl'>Plant Condition: </h1>
            <h2 className=' text-4xl'>{localData?.diagnosisData?.prediction?.class || "Try to Diagnosis"}</h2>
            <p className=' text-green-800 py-3 text-xl'>This prediction only applicable for the previous image which is shown here if you want to update this kindly get a new diagnosis</p>
            </div>
            
            <img src={localData?.diagnosisData?.imageUrl || leaf} className=" w-80 h-80 bg-slate-100 rounded-xl"  />
          </div>
          <div className='w-full flex flex-wrap gap-5'>
          <div className=' flex bg-lime-200 p-5 justify-between items-center rounded-xl xl:w-[48%] w-full md:text-3xl px-10'>
            <div>
            <h1 className=' mg:text-3xl font-semibold md:ms-10 xl:ms-0 text-2xl'>Confidence: </h1>
            <p className=' text-sm text-green-800'>Same as a Above mentioned this confidence score is only for the last prediction if you want a cummulative refer the graph  </p>
            </div>
            
          <Gauge
      width= {200}
      height= {300}
      cornerRadius="30%"
      value={localData?.diagnosisData?.prediction?.confidence*100}
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
          <div className='p-5 rounded-xl flex flex-col justify-center items-center'>
            <p>Cummulative Confidence graph this graph show the model confidence on the diagnosis report</p>
          <LineChart
      xAxis={[{data:Array.from({ length: localData?.confidenceData?.length || 7}, (_, index) => index + 1)}]}
      series={[
        {
          data:  localData?.confidenceData || [99, 40,30,100,45,230,3],
          area: true,
        },
      ]}
      width={500}
      height={300}
    />
          </div>
          
          </div>
          
          </div>
          
       
        </div>

        </div>
        <div className='flex bg-lime-200 p-5 rounded-xl justify-center items-center flex-wrap md:flex-nowrap mt-10'>
        <p>Your image diagnosis will categorize findings into three classes: Healthy, Late Blight, and Early Blight. The bar chart visually depicts the distribution of diagnosis reports across these classes, illustrating the frequency of occurrences for each classification. This graphical representation aids in understanding the prevalence and distribution of plant health issues, offering insights into the relative proportions of Healthy, Late Blight, and Early Blight cases in the diagnostic dataset. </p>
      <BarChart
        dataset={dataset}
        xAxis={[
          { scaleType: 'band', dataKey: 'class', tickPlacement:"middle", tickLabelPlacement:"middle" },
        ]}
        {...chartSetting}
      />
    </div>
    <div className='flex bg-lime-200 p-5 rounded-xl justify-center items-center  flex-wrap md:flex-nowrap mt-10'>
        <p>The dataset comprises information gathered from the most recent crop recommendations. This data encompasses a variety of insights and suggestions derived from past crop cycles, offering valuable guidance for current agricultural practices. By utilizing this collected data, farmers and agronomists can make informed decisions regarding crop selection, planting techniques, and overall management strategies. This compilation of information serves as a comprehensive resource, facilitating improved decision-making processes aimed at optimizing crop yields and agricultural sustainability.</p>
      <BarChart
        dataset={datasetLand}
        xAxis={[
          { scaleType: 'band', dataKey: 'class', tickPlacement:"middle", tickLabelPlacement:"middle" },
        ]}
        
        height={300}
        yAxis={[
            {
              label: 'content of the soil',
            },
          ]}
          series={[{dataKey:"content",label: 'Land Condition', valueFormatter, }]}
          sx={{
            [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
              transform: 'translateX(-10px)',
            },
          }}
        // {...chartSetting}
      />
    </div>
    

    </div>
    
  )
}

export default Analytics