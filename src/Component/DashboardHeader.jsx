import React, { useEffect } from 'react';

import { Link, Outlet, useLocation } from 'react-router-dom';

const DashboardHeader = () => {
    const location= useLocation()
    
    return (
       <div className='w-11/12  mx-auto mt-20'>
         <div className="bg-purple-600 rounded-lg shadow-lg p-8 mb-8 flex flex-col items-center">
            <h1 className="text-white text-4xl font-extrabold mb-4 text-center">
                Welcome to Your Dashboard
            </h1>
            <p className="text-white text-lg mb-2 text-center">
                Manage your products and track your activities with ease.
            </p>
            <p className="text-white text-sm mb-6 text-center">
                Stay organized and make the most of your dashboard experience.
            </p>
            <div className="flex gap-4">
            <Link  
             className={`btn px-10 rounded-full font-bold text-base 
              ${location.pathname==='/dashboard' ? 'text-[#9538E2] bg-white hover:bg-white' :'bg-transparent text-white hover:bg-transparent border-white'}`}
            to='/dashboard'>
              Cart</Link>
            <Link 
            className={`btn px-7 rounded-full font-bold text-base 
              ${location.pathname=== '/dashboard/wishlist' ? 'text-[#9538E2] bg-white hover:bg-white' :'bg-transparent text-white hover:bg-transparent border-white'}`}
            to='/dashboard/wishlist'>Wishlist</Link>
            </div>
            
           
        </div>
        <Outlet></Outlet>
       </div>
    );
};

export default DashboardHeader;
