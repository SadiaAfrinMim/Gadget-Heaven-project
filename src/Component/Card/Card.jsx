import React, { useEffect, useState } from 'react';
import Singlecard from './Singlecard';
import { CgSmileSad } from "react-icons/cg";

const Card = ({ categories }) => {
    const [alldata, setAlldata] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [activeCategory, setActiveCategory] = useState('All Products'); // Track active category

    useEffect(() => {
        fetch('./fakedata.json')
            .then(res => res.json())
            .then(data => {
                setAlldata(data);
                setFilteredData(data); // Initialize filtered data with all data
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleCategoryData = (category) => {
        const filterData = alldata.filter(item => item.category === category);
        setFilteredData(filterData);
        setActiveCategory(category); // Set the clicked category as active
    };

    const handleAllData = () => {
        setFilteredData(alldata); // Reset to show all products
        setActiveCategory('All Products'); // Set 'All Products' as active
    };

    return (
        <div className='w-11/12 mx-auto py-12 space-y-8'>
            <div>
                <h1 className='text-4xl font-bold text-center'>Explore Cutting-Edge Gadgets</h1>
            </div>
            <div className='grid lg:grid-cols-12 grid-cols-1 gap-8'>
                {/* Categories Section */}
                <div className='col-span-3'>
                    <div className='flex flex-col text-center space-y-2'>
                        <button
                            onClick={handleAllData}
                            className={`${
                                activeCategory === 'All Products' ? 'bg-[#9538E2] text-white' : 'border-2 border-[#9538E2] text-[#9538E2]'
                            } font-bold btn-lg rounded-full transition`}
                        >
                            All Products
                        </button>
                        {categories.map(btn => (
                            <button
                                onClick={() => handleCategoryData(btn.category)}
                                key={btn.category} // Ensure uniqueness
                                className={`${
                                    activeCategory === btn.category ? 'bg-[#9538E2] text-white' : 'border-2 border-[#9538E2] text-[#9538E2]'
                                } font-bold btn-lg rounded-full transition`}
                            >
                                {btn.category}
                            </button>
                        ))}
                    </div>
                </div>
                
                {/* Products Section */}
                <div className='col-span-9'>
                    {filteredData.length > 0 ? (
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                            {filteredData.map(data => (
                                <Singlecard key={data.product_id} data={data} /> // Assuming each data has a unique 'id'
                            ))}
                        </div>
                    ) : (
                        <div className='flex-col text-5xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent shadow-xl rounded-xl flex justify-center items-center h-full'>
                            <p className='text-8xl animate-bounce font-bold text-[#9538E2]'><CgSmileSad /></p>
                            <h3 className='font-bold text-3xl text-center'>No products available for this category.</h3>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Card;
