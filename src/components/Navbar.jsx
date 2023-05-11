/* eslint-disable no-unused-vars */
import React from 'react';
import bgimg from '../assets/images/more/15.jpg'
import logo from '../assets/images/more/logo1.png'

const Navbar = () => {
    return (
        <div className=' bg-cover mt-0 w-full bg-no-repeat' style={{ backgroundImage: `url(${bgimg})` }}>
            <div className='flex h-14 justify-center items-center'>
            <img className='w-10' src={logo} alt="" />
            <h1 className='text-white text-4xl ml-5' style={{ fontFamily: 'Rancho'}} >Espresso Emporium</h1>
            </div>
        </div>
    );
};

export default Navbar;