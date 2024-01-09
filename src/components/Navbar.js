import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiAlignJustify } from "react-icons/fi";
import logo from '../images/Logo.png'


const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(true)


    return (
        <>

            <header className='bg-gray-50 '>
                <nav className='flex justify-between items-center w-[85%] mx-auto py-2 font-[poppins]'>
                    <div className='flex items-center'>
                  <img src={logo} alt="" srcset="" className='w-[55px]' />
                    <span>Dr.Navinbalaji's</span>
                    </div>

                    <div className={menuOpen ? "invisible md:visible" : ""}>

                    <div className='flex flex-col md:flex-row md:items-center md:gap-x-8 gap-y-4 absolute md:static top-12 w-[60%] h-[30%] sm:w-[50%] sm:h-[40%] px-6 sm:px-10 py-4 sm:py-5 md:px-0 md:py-0 md:h-fit md:w-auto   left-0 bg-gray-50 -z-20 md:z-0'>
                        <ul className='flex flex-col md:flex-row md:items-center md:gap-x-6 gap-y-2 font-semibold text-[10px] sm:text-[12px]  md:text-[14px]'>
                            <li className='hover:text-sky-500'><Link to='/services'>Services</Link></li>
                            <li className='hover:text-sky-500'><Link to='/docter'>Docters</Link></li>
                            <li className='hover:text-sky-500'><Link to='/about'>About</Link></li>
                            <li className='hover:text-sky-500'><Link to='/blog'>Blog</Link></li>
                            <li className='hover:text-sky-500'><Link to='contact'>Contact</Link></li>
                        </ul>
                        <div>
                            <p className='bg-sky-600 px-3 py-1 md:px-4 md:py-1.5 rounded-md shadow-md drop-shadow-md w-fit text-[10px] sm:text-[12px] md:text-[14px] cursor-pointer font-semibold text-white'>SIGN IN</p>
                        </div>
                    </div>
                    </div>


                    <div className='flex md:hidden cursor-pointer' onClick={() => { setMenuOpen(!menuOpen) }}>
                      <FiAlignJustify  className='w-8 text-gray-950'/> 


                    </div>
                  
                </nav>
            </header>


        </>

    );
};

export default Navbar;
