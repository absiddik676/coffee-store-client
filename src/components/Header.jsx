/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import bg from '../assets/images/more/3.png'

const Header = () => {
    return (
        <div className=' bg-cover mt-0 bg-no-repeat ' style={{ backgroundImage: `url(${bg})` }}>
            <div className='h-screen w-full flex justify-start items-center'>
                <div className='w-1/2'>
                    
                </div>
            <div className=' text-white px-20 pl-20'>
                <h1 style={{ fontFamily: 'Rancho'}} className=' text-4xl'>Would you like a Cup of Delicious Coffee?</h1>
                <p className='py-5'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!!  Enjoy the beautiful moments and make them memorable.</p>
                <button className=' mt-5 border-2 text-black px-5 border-[#331A15] py-2 rounded-md mb-10 bg-[#D2B48C] '>Learn More</button>
            </div>
            </div>
            
        </div>
    );
};

export default Header;