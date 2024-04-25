import React, { useState } from 'react'
import NavBar from './Components/NavBar'
import Dashboard from './Components/Dashboard'
import PredictionForm from './Components/PredictionForm'
import CropRecommend from "./Components/CropRecommend"
import PreviousData from './Components/PreviousData'
import fieldImage from './assets/fields.jpg'
import ReactWeather, { useOpenWeather } from 'react-open-weather';
import WeatherComponent from './Components/WeatherComponent'


const App = () => {
  const [fragmentName, setFragmentName] = useState()
  const renderFragment = (fragmentName) =>{
    switch(fragmentName){
      case "plantDiagnosis":{
        return <PredictionForm />
      }
      case "dashboard":{
        return <Dashboard/>
      }
      case "cropSuggestions":{
        return <CropRecommend/>
      }
      case "analytics":{
        return <PreviousData />
      }
      default:{
        return <Dashboard />
      }
    }
  }
 
  return (
    <div >
    <NavBar setFragmentName={setFragmentName} />
    {renderFragment(fragmentName)}
    <img src={fieldImage} alt='field image' className='w-screen h-screen object-cover object-center -z-10 top-0 fixed'/>

    </div>
  )
}

export default App