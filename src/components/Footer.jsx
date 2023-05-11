/* eslint-disable no-unused-vars */
import React from 'react';
import bgimg from '../assets/images/more/24.jpg'

const Footer = () => {
    
    return (
        <div>
            <div className=' bg-cover mt-0 w-full bg-no-repeat' style={{ backgroundImage: `url(${bgimg})` }}>
            <div className='flex h-14 justify-center items-center'>
            <h1 className='text-white text-md font-semibold ml-5' >Copyright Espresso Emporium ! All Rights Reserved</h1>
            </div>
        </div>
        </div>
    );
};

export default Footer;