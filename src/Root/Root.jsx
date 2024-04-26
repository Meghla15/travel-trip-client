import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';


const Root = () => {
    return (
        <div className='bg-green-50'>
          <Navbar></Navbar>  
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default Root;