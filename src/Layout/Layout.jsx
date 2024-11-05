import React, { createContext } from 'react';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Footer';


export const Countcontex =createContext()

const Layout = () => {
    return (
        <div>
           <Countcontex.Provider>
           <Navbar></Navbar>
           <div>
           <Outlet></Outlet>
           </div>
            <Footer></Footer>
           </Countcontex.Provider>

        </div>
    );
};

export default Layout;