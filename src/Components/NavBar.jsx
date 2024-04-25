import React from 'react'

const NavBar = ({setFragmentName}) => {
  return (
    <div className=' bg-gradient-to-tr from-[#56ab2f] to-[#a8e063] w-full-1 rounded-lg h-14 m-3 justify-between items-center flex p-6 fixed top-0 left-0 right-0 z-10'> 
    
        <h1 className='text-white font-extrabold text-3xl tracking-wider font-mono '>TECHNO FARM</h1>
        <ul className='flex space-x-4 text-white font-bold'>
            <li onClick={()=>setFragmentName("dashboard")} className=' cursor-pointer'>Dashboard</li>
            <li onClick={()=>setFragmentName("analytics")} className=' cursor-pointer'>Analytics</li>
            <li onClick={()=>setFragmentName("plantDiagnosis")} className=' cursor-pointer'>Plant diagnosis</li>
            <li onClick={()=>setFragmentName("cropSuggestions")} className=' cursor-pointer'>Crop Suggestions</li>

        </ul>

    </div>
  )
}

export default NavBar