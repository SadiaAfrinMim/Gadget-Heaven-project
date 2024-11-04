import React from 'react';
import Layout from '../Layout/Layout';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home';
import Statistic from '../Pages/Statistic';
import Dashboard from '../Pages/Dashboard';
import Card from '../Component/Card/Card';
import CardDetails from '../Component/Card/Carddetails';
import DashboardHeader from '../Component/DashboardHeader';

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/", // Home page route
        element: <Home />,
        loader: () => fetch('../btnfakedata.json'), // Ensure correct path for your data
      },
      {
        path: "cards", // Route for Card component
        element: <Card />,
        loader: () => fetch('../fakedata.json'), // Add loader if you need data for Card
      },
      {
        path: "statistic", // Statistic page route
        element: <Statistic />,
      },
      {
        path:'/dashboard',
        element:<DashboardHeader></DashboardHeader>,
      },
      {
        path: "/dashboard/:product_id", // Dashboard page route
        element: <Dashboard />,
        loader: () => fetch('../fakedata.json'), 
      },
      {
        path: "/category/:product_id", 
        element: <CardDetails />,
        loader: () => fetch('../fakedata.json'), 
      },
    ],
  },
]);

export default Route;
