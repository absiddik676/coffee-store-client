/* eslint-disable no-unused-vars */
import React from 'react';
import bgimg from '../assets/images/more/15.jpg'
import logo from '../assets/images/more/logo1.png'

const Navbar = () => {
    return (
        <div className='h-14 bg-cover mt-0 w-full bg-no-repeat' style={{ backgroundImage: `url(${bgimg})` }}>
            <div className='flex justify-center items-center'>
            <img className='w-10' src={logo} alt="" />
            <h1 className='text-white text-2xl font-semibold ml-5'>Espresso Emporium</h1>
            </div>
        </div>
    );
};

export default Navbar;