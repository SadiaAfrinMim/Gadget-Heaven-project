import React from 'react';
import Banner from '../Component/Banner';
import Bannerdown from '../Component/Bannerdown';
import { Outlet, useLoaderData } from 'react-router-dom';
import Card from '../Component/Card/Card';

const Home = () => {
    const categories = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <Outlet></Outlet>
            <Bannerdown></Bannerdown>
            <Card categories={categories}></Card>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;