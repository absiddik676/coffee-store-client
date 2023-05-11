/* eslint-disable no-unused-vars */
import React from 'react';
import logo from '../assets/images/more/logo1.png'
import bgimg from '../assets/images/more/13.jpg'
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin, BsFillTelephoneFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
const Contact = () => {
    return (
        <div style={{ backgroundImage: `url(${bgimg})` }} className='px-20 mt-20 flex gap-5'>
            <div className='w-1/2'>
                <img className='w-10' src={logo} alt="" />
                <h1 className='text-2xl text-[#331A15] font-bold'>Espresso Emporium</h1>
                <p className='py-3'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                <div className='flex gap-6'>
                    <BsFacebook className='text-3xl' />
                    <BsTwitter className='text-3xl' />
                    <BsInstagram className='text-3xl' />
                    <BsLinkedin className='text-3xl' />
                </div>
                <h1 className='text-2xl text-[#331A15] font-bold py-4'>Get in Touch</h1>
                <div className='flex gap-4'>
                    <BsFillTelephoneFill className='text-xl' />
                    <p>+88 01533 333 333</p>
                </div>
                <div className='flex gap-4 py-3'>
                    <AiFillMail className='text-xl' />
                    <p>info@gmail.com</p>
                </div>
                <div className='flex gap-4'>
                    <HiLocationMarker className='text-xl' />
                    <p>72, Wall street, King Road, Dhaka</p>
                </div>
            </div>
            <div className='w-1/2'>
                <h1 className='text-2xl text-[#331A15] font-bold mt-11'>Connect with Us</h1>
            </div>
        </div>
    );
};

export default Contact;