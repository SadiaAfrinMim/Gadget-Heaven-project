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
        path: "/", // Home page route
        element: <Home />,
        loader: () => fetch('../btnfakedata.json'), // Ensure correct path for your data
      },
      {
        path: "cards", // Route for Card component
        element: <Allcard/>,
        loader: () => fetch('../fakedata.json'), // Add loader if you need data for Card
      },
      {
        path: "statistic", // Statistic page route
        element: <Statistic />,
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
        element: <Allcard />,
        loader: () => fetch('../fakedata.json'), 
      },
      {
        path:"/GadgetHeave-/contact",
        element:<Contac></Contac>

      }
    ],
  },
]);

export default Route;
