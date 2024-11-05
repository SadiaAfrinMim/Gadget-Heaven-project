import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { setStoredCartItems, setStoredWishList } from "../../Utitlity/Localstorage";
import ReactStars from "react-rating-stars-component";



const CardDetails = () => {
  const useDetails = useLoaderData();
  const { product_id } = useParams();
  const [singleDetails, setSingleDetails] = useState(null);

  // Set the selected product's details
  useEffect(() => {
    const singleData = useDetails.find(
      (eachData) => eachData.product_id === parseInt(product_id)
    );
    setSingleDetails(singleData);
    console.log(singleData);
  }, [product_id, useDetails]);

  const handleAddtoCart = (product_id) => {
    setStoredCartItems(product_id);
  };
  const handleWishList = (product_id) =>{
    setStoredWishList(product_id)
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
                  ? "text-green-600 btn-xs border-2 border-green-600 rounded-full"
                  : "text-red-600"
              } ml-2`}
            >
              {availability ? "In Stock" : "Out of Stock"}
            </span>
          </p>
          <p className="mt-2">
            <ReactStars count={5} value={rating} size={24} activeColor="#ffd700" />
          </p>
          <div className="flex gap-2 justify-center lg:justify-start">
            <Link to={"/dashboard"}>
              <button
                onClick={() => handleAddtoCart(product_id)}
                className="btn text-white bg-[hsl(273,75%,55%)] rounded-full font-bold"
              >
                Add to cart
              </button>
            </Link>
  
            <Link to={"/dashboard/wishlist"}>
              <button
                onClick={() => handleWishList(product_id)}
                className="btn text-white bg-[#9538E2] rounded-full font-bold"
              >
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
