/* eslint-disable no-unused-vars */
import React from 'react';
import cup1 from '../assets/images/cups/Rectangle 10.png'
import cup2 from '../assets/images/cups/Rectangle 12.png'
import cup3 from '../assets/images/cups/Rectangle 11.png'
import cup4 from '../assets/images/cups/Rectangle 13.png'
import cup5 from '../assets/images/cups/Rectangle 14.png'
import cup6 from '../assets/images/cups/Rectangle 15.png'
import cup7 from '../assets/images/cups/Rectangle 16.png'
import cup8 from '../assets/images/cups/Rectangle 9.png'
import '../../src/index.css';


const Instagram = () => {
    return (
        <div className='my-10'>
            <h1 className='text-center'>Follow Us Now</h1>
            <h1 style={{ fontFamily: 'Rancho'}} className='text-center text-5xl'>Follow on Instagram</h1>
            <div className='px-20 grid grid-cols-4 gap-5 mt-3'>
                <img src={cup1} alt="" />
                <img src={cup2} alt="" />
                <img src={cup3} alt="" />
                <img src={cup4} alt="" />
                <img src={cup5} alt="" />
                <img src={cup6} alt="" />
                <img src={cup7} alt="" />
                <img src={cup8} alt="" />
            </div>
        </div>

    );
};

export default Instagram;