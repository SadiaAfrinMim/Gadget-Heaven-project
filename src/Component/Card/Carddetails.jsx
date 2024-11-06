import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { getStoredWishList, setStoredCartItems, setStoredWishList } from "../../Utitlity/Localstorage";
import ReactStars from "react-rating-stars-component";
import { BsCart } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";



const CardDetails = () => {
  const useDetails = useLoaderData();
  const { product_id } = useParams();
  const [singleDetails, setSingleDetails] = useState(null);
  const [isWishListDisable, setWislistDisable] = useState(false);
  

  // Set the selected product's details
  useEffect(() => {
    const singleData = useDetails.find(
      (eachData) => eachData.product_id === parseInt(product_id)
    );
    setSingleDetails(singleData||{});

    const isWishList = getStoredWishList();
    const isExist = isWishList.find(id => JSON.parse(product_id) === singleData.id)
    if(isExist){
      setWislistDisable(true)
    }
    document.title = "ProductDetails || Gadget Heaven"
   
  }, [product_id, useDetails]);

 

  

  const handleAddtoCart = (product_id,product_title) => {
    setStoredCartItems(product_id,product_title);
  };
  const handleWishList = (product_id,product_title) =>{
    setStoredWishList(product_id,product_title)
    setWislistDisable(true)
  }

  const {
    product_title,
    product_image,
    price,
    category,
    description,
    specification,
    availability,
    rating,
  } = singleDetails || {};

  return (
    <div className="flex justify-center items-center w-11/12 mx-auto relative">
    {singleDetails ? (
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col lg:flex-row gap-8 justify-center items-center lg:-mt-36 mt-10">
        <div className="flex-1">
          <img
            src={product_image}
            className="w-80 h-80 lg:w-96 lg:h-96 rounded-xl object-cover mb-4"
            alt={product_title}
          />
        </div>
        <div className="flex-1 space-y-2  lg:text-left">
          <h2 className="text-2xl font-bold mb-4">{product_title}</h2>
          <p className="text-lg font-semibold">Price: ${price.toFixed(2)}</p>
          <p className="mt-2">Category: {category}</p>
          <p className="mt-4">{description}</p>
          <h3 className="mt-4 font-semibold">Specifications:</h3>
          <ul className="list-disc list-inside mb-4 text-left">
            {specification &&
              specification.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
          </ul>
          <p className="mt-2">
            Availability: 
            <span
              className={`${
                availability
                  ? "text-green-600 btn-xs border-2 border-green-600 font-bold rounded-full"
                  : "text-red-600 font-bold btn-xs border-2 border-red-600 rounded-full"
              } ml-2`}
            >
              {availability ? "In Stock" : "Out of Stock"}
            </span>
          </p>
          <p className="mt-2">
            <ReactStars count={5} value={rating} size={24} activeColor="#ffd700" />
          </p>
          <div className="flex gap-2 justify-center lg:justify-start">
           
              <button
                onClick={() => handleAddtoCart(product_id,product_title)}
                className="btn text-white outline-2 bg-[hsl(273,75%,55%)] rounded-full font-bold"
              >
                Add to cart <BsCart />
              </button>
           
  
      
              <button disabled={isWishListDisable}
                onClick={() => handleWishList(product_id,product_title)}
                className="btn btn-outline outline-2 text-xl text-[#9538E2]  font-bold rounded-full outline-purple-600"
              >
               <FaRegHeart />
              </button>
           
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
