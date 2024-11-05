import React, { useEffect, useState } from 'react';

import { useLoaderData } from 'react-router-dom';
import { getStoredWishList, removeWish } from '../Utitlity/Localstorage';

const Wishlist = () => {
    const allCard = useLoaderData();
    const [wishList, setWishList] = useState([]);
    console.log('wishlist adding',wishList)

    useEffect(() => {
        const addToCardId = getStoredWishList();
        const convertIntCardId = addToCardId.map(id => parseInt(id));
        const filterCard = allCard.filter(card => convertIntCardId.includes(card.product_id)); 
        setWishList(filterCard);

    }, [allCard]); // Use allCard as dependency

    const handleRemoveWish = (id, name) => {
        removeWish(id, name);

        const updatedCardIds = getStoredWishList(); // Fetch the updated wish list after removal
        const convertIntCardId = updatedCardIds.map(id => parseInt(id));
        const filterCard = allCard.filter(card => convertIntCardId.includes(card.product_id));
        setWishList(filterCard);
    };

    return (
        <div className='w-11/12 mx-auto flex-col gap-4 py-10'>
    <div className="flex flex-col gap-4">
        {
            wishList.map(card => (
                <div className="w-full flex justify-between items-center py-5 border-2 rounded-xl px-3 shadow-md hover:shadow-lg transition-shadow" key={card.product_id}>
                    <div className="flex gap-4 items-center">
                        <div className="w-72 h-48 border-2 bg-slate-100 rounded-md">
                            <img 
                                className="w-full rounded-xl h-full object-cover"
                                src={card.product_image} 
                                alt={card.product_title} 
                            />
                        </div>
                        <div className='space-y-2'>
                            <p className="font-bold text-xl">{card.product_title}</p>
                            <p className="font-bold text-base">{card.description}</p>
                            <p className="font-bold text-base">Price: ${card.price}</p>
                            <button className='btn-md text-xl font-bold  text-white bg-purple-600 rounded-full'>Details</button>
                        </div>
                    </div>
                    <div>
                        <button 
                            onClick={() => handleRemoveWish(card.product_id, card.product_title)} 
                            className="btn btn-sm bg-red-500 text-white font-bold text-lg rounded-full border border-red-500 hover:bg-red-600 transition-colors"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            ))
        }
    </div>
</div>

    );
};

export default Wishlist;
