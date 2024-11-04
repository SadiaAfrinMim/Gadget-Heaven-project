import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';


const Dashboard = () => {
    const dashboardDetails = useLoaderData(); 
    const { product_id } = useParams(); 
    const [dashboard, setDashboard] = useState(null); 
    useEffect(() => {
        
        const details = dashboardDetails.find(singledash => singledash.product_id === parseInt(product_id)); 
        setDashboard(details);
    }, [dashboardDetails, product_id]);


    
   
   
    const { product_title, product_image, price, category, description, specification, availability, rating } = dashboard || {}; 

    return (
    
        <div className="w-11/12 mx-auto py-12">
          
                <div className="bg-white flex justify-start items-center  p-6 gap-8 rounded-lg shadow-lg">
                    
                    <div>
                    <img 
                        src={product_image}
                        
                        className="w-80 h-48 object-cover mb-4 rounded-lg"
                    />
                    </div>
                   <div>
                   <h1 className="text-2xl font-bold mb-4">Product: {product_title}</h1>
                    <p className="text-lg font-semibold">Price: ${price}</p>
                    <p className="mt-2">Category: {category}</p>
                   
                    <p className="mt-2">Rating: {rating} / 5</p>
                   </div>
                </div>
            
        </div>
    );
};

export default Dashboard;
