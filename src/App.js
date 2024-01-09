import React, { useEffect } from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar'
function App() {

    useEffect(() => {
  AOS.init({duration:2000})
    } , [])
  return (

    <Router>
<Navbar/>
      <Routes>

        <Route/>
      </Routes>

    </Router>




  


// <div className='flex flex-col justify-center w-[50%] mx-auto  mt-96 gap-y-7'>
//    <div className='bg-gray-700 rounded-md h-20 ' data-aos='fade-up' >Hello</div>
//    <div className='bg-gray-700 rounded-md h-20 ' data-aos='fade-right' >Hello</div>
//    <div className='bg-gray-700 rounded-md h-20 ' data-aos='fade-left' >Hello</div>
//    <div className='bg-gray-700 rounded-md h-20 ' data-aos='fade-down' >Hello</div>
//    <div className='bg-gray-700 rounded-md h-20 ' data-aos='flip-right' >Hello</div>
//    <div className='bg-gray-700 rounded-md h-20 ' data-aos='zoom-in' >Hello</div>
//    <div className='bg-gray-700 rounded-md h-20 ' data-aos='' >Hello</div>
//    <div className='bg-gray-700 rounded-md h-20 ' data-aos='' >Hello</div>

//    </div>


  
  );
}

export default App;
