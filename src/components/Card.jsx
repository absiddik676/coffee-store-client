/* eslint-disable no-unused-vars */
import React from 'react';
import icon from '../assets/images/icons/1.png'
import icon2 from '../assets/images/icons/2.png'
import icon3 from '../assets/images/icons/3.png'
import icon4 from '../assets/images/icons/4.png'
import bg from '../assets/images/more/10.png'


const Card = () => {
    return (
        <div className=' bg-cover mt-0 bg-no-repeat ' style={{ backgroundImage: `url(${bg})` }} >
            <div className='flex gap-5 px-20 py-9'>
                <div>
                    <img src={icon} alt="" />
                    <h1 style={{ fontFamily: 'Rancho'}} className='text-3xl'>Awesome Aroma</h1>
                    <p>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div>
                    <img src={icon2} alt="" />
                    <h1 style={{ fontFamily: 'Rancho'}} className='text-3xl'>High Quality</h1>
                    <p>We served the coffee to you maintaining the best quality</p>
                </div>
                <div>
                    <img src={icon3} alt="" />
                    <h1 style={{ fontFamily: 'Rancho'}} className='text-3xl'>Pure Grades</h1>
                    <p>The coffee is made of the green coffee beans which you will love</p>
                </div>
                <div>
                    <img src={icon4} alt="" />
                    <h1 style={{ fontFamily: 'Rancho'}} className='text-3xl'>Proper Roasting</h1>
                    <p>Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
            </div>

        </div>
    );
};

export default Card;