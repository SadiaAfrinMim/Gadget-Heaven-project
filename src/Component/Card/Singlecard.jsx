import React from 'react';
import { Link } from 'react-router-dom';

const SingleCard = ({ data }) => {
    const {product_image, product_title, price,category,product_id} = data
    
    
    return (
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <img
                src={product_image}
               
                className="w-full h-48 object-cover"
            />
            <div className="p-4 space-y-2">
                <h2 className="text-xl font-semibold text-gray-800">{product_title}</h2>
                <h4> {category}</h4>
                <p className="text-lg font-bold text-gray-900 mt-2">${price.toFixed(2)}</p> 
              <Link to={`/category/${product_id}`}>
              <button  className="mt-4 w-full bg-[#9538E2] text-white font-bold py-2 rounded-full hover:bg-[#7a1cae] transition">
                    View Details
                </button>
              </Link>
            </div>
        </div>
        
    );
};

export default SingleCard;
