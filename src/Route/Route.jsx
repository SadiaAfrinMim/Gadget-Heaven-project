import React from 'react';
import Layout from '../Layout/Layout';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home';
import Statistic from '../Pages/Statistic';
import Dashboard from '../Pages/Dashboard';
import DashboardHeader from '../Component/DashboardHeader';
import Allcard from '../Component/Card/Allcard';
import Wishlist from '../Component/Wishlist';
import Contac from '../Pages/Contac';
import Errorpage from '../Pages/Errorpage';


const Route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement:<Errorpage></Errorpage>,
    children: [
      {
        path: "/", 
        element: <Home />,
        loader: () => fetch('../btnfakedata.json'), 
      },
      {
        path: "cards", 
        element: <Allcard/>,
        loader: () => fetch('../fakedata.json'),
      },
      {
        path: "/statistic", 
        element: <Statistic></Statistic>
      },
      {
        path:'/dashboard',
        element:<DashboardHeader></DashboardHeader>,
        children:[
          {
            path: "/dashboard", 
            element: <Dashboard></Dashboard>,
            loader: () => fetch('../fakedata.json'), 
          },
          {
            path:"/dashboard/wishlist",
            element:<Wishlist></Wishlist>,
            loader: ()=>fetch('../fakedata.json')
          }
        ]
      },
      
      {
        path: "/category/:product_id", 
        element: <Allcard></Allcard>,
        loader: () => fetch('../fakedata.json'), 
      },
      {
        path:"/contact",
        element:<Contac></Contac>

      }
    ],
  },
]);

export default Route;
