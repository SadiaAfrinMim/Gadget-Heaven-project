import React from 'react';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Footer';

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
           <div>
           <Outlet></Outlet>
           </div>
            <Footer></Footer>

        </div>
    );
};

export default Layout;