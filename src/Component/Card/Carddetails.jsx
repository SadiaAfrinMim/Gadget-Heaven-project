import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const CardDetails = () => {
    const useDetails = useLoaderData();
    const { product_id } = useParams();
    const [singleDetails, setSingleDetails] = useState(null);
    

    useEffect(() => {
        const singleData = useDetails.find(eachdata => eachdata.product_id ==(product_id));
        setSingleDetails(singleData);
    }, [product_id, useDetails]);

   

    const { product_title, product_image, price, category, description, specification, availability, rating } = singleDetails || {};

    return (
        <div className="flex justify-center items-center w-11/12 mx-auto py-12">
            {singleDetails ? (
                <div className="bg-white p-6 rounded-lg shadow-lg lg:flex gap-8 justify-center items-center">
                    <div className='flex-1'>
                        <img 
                            src={product_image} 
                            alt={product_title} 
                            className="w-96 h-96 rounded-xl object-cover mb-4" 
                        />
                    </div>
                    <div className='flex-1 space-y-2'>
                        <h2 className="text-2xl font-bold mb-4">{product_title}</h2>
                        <p className="text-lg font-semibold">Price: ${price.toFixed(2)}</p>
                        <p className="mt-2">Category: {category}</p>
                        <p className="mt-4">{description}</p>
                        <h3 className="mt-4 font-semibold">Specifications:</h3>
                        <ul className="list-disc list-inside mb-4">
                            {specification && specification.map((spec, index) => (
                                <li key={index}>{spec}</li>
                            ))}
                        </ul>
                        <p className="mt-2">Availability: 
                            <span className={availability ? "text-green-600 btn-xs border-2 border-green-600 rounded-full" : "text-red-600"}>
                                {availability ? " In Stock" : " Out of Stock"}
                            </span>
                        </p>
                        <p className="mt-2">Rating: {rating} / 5</p>
                        <div className='flex gap-2'>
                            <Link to={`/dashboard/${product_id}`}>
                                <button className='btn text-white bg-[#9538E2] rounded-full font-bold'>
                                    Add to cart
                                </button>
                            </Link>
                            <Link to={`/dashboard/${product_id}`}>
                                <button className='btn text-white bg-[#9538E2] rounded-full font-bold'>
                                    Wishlist
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default CardDetails;
