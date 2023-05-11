/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default MainLayout;