import React, { useEffect, useState } from 'react';

import { useLoaderData } from 'react-router-dom';
import { getStoredWishList, removeWish } from '../Utitlity/Localstorage';
import { TiDeleteOutline } from "react-icons/ti";

const Wishlist = () => {
    const allCard = useLoaderData();
    const [wishList, setWishList] = useState([]);
    

    useEffect(() => {
        const addToCardId = getStoredWishList();
        const convertIntCardId = addToCardId.map(id => parseInt(id));
        const filterCard = allCard.filter(card => convertIntCardId.includes(card.product_id)); 
        setWishList(filterCard);

    }, [allCard]); 

    const handleRemoveWish = (id, name) => {
        removeWish(id, name);

        const updatedCardIds = getStoredWishList();
        const convertIntCardId = updatedCardIds.map(id => parseInt(id));
        const filterCard = allCard.filter(card => convertIntCardId.includes(card.product_id));
        setWishList(filterCard);
    };

    return (
        <div className="w-11/12 mx-auto flex flex-col gap-4 py-10">
  <div className="flex flex-col gap-4">
    {
      wishList.map(card => (
        <div 
          className="w-full flex flex-col lg:flex-row justify-between items-center py-5 border-2 rounded-xl px-3 shadow-md hover:shadow-lg transition-shadow"
          key={card.product_id}
        >
          {/* Product Image and Details */}
          <div className="flex flex-col md:flex-row gap-4 items-center w-full lg:w-auto">
            <div className="w-full lg:w-72 h-48 border-2 bg-slate-100 rounded-md overflow-hidden">
              <img 
                className="w-full h-full object-cover rounded-md"
                src={card.product_image} 
                alt={card.product_title} 
              />
            </div>
            <div className="space-y-2 text-center md:text-left w-full lg:w-auto">
              <p className="font-bold text-lg lg:text-xl">{card.product_title}</p>
              <p className="font-medium text-sm lg:text-base">{card.description}</p>
              <p className="font-bold text-base">Price: ${card.price}</p>
              <button className="btn btn-sm lg:btn-md text-sm lg:text-lg font-bold text-white bg-purple-600 rounded-full">
                Details
              </button>
            </div>
          </div>

          {/* Remove Button */}
          <div className="mt-4 lg:mt-0">
            <button 
              onClick={() => handleRemoveWish(card.product_id, card.product_title)} 
              
            >
              <TiDeleteOutline className='text-5xl text-red-600  font-bold rounded-full animate-bounce' />
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
