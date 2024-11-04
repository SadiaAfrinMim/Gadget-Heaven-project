import React from 'react';
import Dashboard from '../Pages/Dashboard';

const DashboardHeader = () => {
    return (
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
                <button className="bg-white text-purple-600 font-semibold py-2 px-4 rounded-full hover:bg-purple-100 transition">
                    Get Started
                </button>
                <button className="bg-white text-purple-600 font-semibold py-2 px-4 rounded-full hover:bg-purple-100 transition">
                    View Reports
                </button>
            </div>
            <Dashboard></Dashboard>
        </div>
    );
};

export default DashboardHeader;
