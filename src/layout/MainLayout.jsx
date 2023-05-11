/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Contact from '../components/Contact';

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Contact/>
        </div>
    );
};

export default MainLayout;