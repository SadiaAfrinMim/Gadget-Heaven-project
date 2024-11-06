import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredCartItems, removecard } from '../Utitlity/Localstorage';
import { RiDeleteBin5Fill } from "react-icons/ri";
import Modal from '../Component/Modal';

const Dashboard = () => {
  const dashboardDetails = useLoaderData();
  const [dashboard, setDashboard] = useState([]);
  const [amount, setAmount] = useState(0);
  const [payment, setPayment] = useState(0);
  const [isDisable, setDisable] = useState(true);

  useEffect(() => {
    document.title = 'dashboard-Gadget Heave';
    const addToCardId = getStoredCartItems();
    const convertIntProductId = addToCardId.map(id => parseInt(id));
    const filterCard = dashboardDetails.filter(sinCard => convertIntProductId.includes(sinCard.product_id));
    setDashboard(filterCard);

    const totalCost = filterCard.reduce((sum, sinCard) => sum + sinCard.price, 0).toFixed(2);
    setAmount(totalCost);
    setDisable(filterCard.length === 0);
  }, [dashboardDetails, setDashboard]);

  const handleSortDs = () => {
    const sorted = [...dashboard].sort((a, b) => b.price - a.price);
    setDashboard(sorted);
  };

  const handlePurchaseBtn = (amount) => {
    // Remove all items from the cart
    localStorage.removeItem('card-list');
    setDashboard([]);
    document.getElementById('my_modal_1').showModal(); // Show the modal
    setPayment(amount);  // Set the payment to the current amount
    setAmount(0);  // Reset the amount
    setDisable(true);  // Disable the button after purchase
  };

  const handleRemoveToLS = (product_id, product_title, price) => {
    removecard(product_id, product_title);
    const addToCardId = getStoredCartItems();
    const convertIntCardId = addToCardId.map(id => parseInt(id));
    const filterCard = dashboardDetails.filter(card => convertIntCardId.includes(card.product_id));
    setDashboard(filterCard);

    setAmount((amount - price).toFixed(2));
    setDisable(filterCard.length === 0);
  };

  return (
    <div className="w-11/12 mx-auto gap-6 mt-20">
      {/* Header Section */}
      <div className="w-11/12 mx-auto py-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
          <div className="mb-4 lg:mb-0">
            <h2 className="text-2xl font-semibold text-gray-700">Cart</h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 flex-wrap items-start lg:items-center lg:justify-end w-full lg:w-auto">
            <p className="text-xl lg:text-2xl font-bold text-purple-600 text-center lg:text-left">
              Total Amount: ${amount}
            </p>

            {/* Sort and Purchase Buttons */}
            <div className="flex justify-between items-center gap-4">
              <button
                onClick={handleSortDs}
                className="bg-purple-600 text-white font-semibold py-2 px-4 lg:px-6 rounded-full hover:bg-purple-700 transition text-sm lg:text-base"
              >
                Sort by Price
              </button>

              <button
                disabled={isDisable}
                onClick={() => handlePurchaseBtn(amount)}
                className={`bg-gray-200 text-purple-600 font-semibold py-2 px-4 lg:px-6 rounded-full hover:bg-gray-300 transition text-sm lg:text-base ${
                  isDisable ? 'cursor-not-allowed' : 'cursor-pointer'
                }`}
              >
                Purchase
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Items */}
      <div className="w-full gap-6">
        {dashboard.map(deatail => (
          <div
            className="bg-white flex flex-col md:flex-row items-center md:justify-between p-4 md:p-6 rounded-lg shadow-lg"
            key={deatail.product_id}
          >
            <div className="flex flex-col md:flex-row items-center gap-4">
              <img
                src={deatail.product_image}
                className="w-full md:w-80 h-48 object-cover rounded-lg"
                alt={deatail.product_title}
              />
              <div className="text-center md:text-left">
                <h1 className="text-lg md:text-2xl font-bold mb-2">Product: {deatail.product_title}</h1>
                <p className="text-md md:text-lg font-semibold">Price: ${deatail.price}</p>
                <p className="text-sm md:text-base mt-2">Category: {deatail.category}</p>
                <p className="text-sm md:text-base mt-2">Rating: {deatail.rating} / 5</p>
              </div>
            </div>
            <div
              className="cursor-pointer mt-4 md:mt-0"
              onClick={() => handleRemoveToLS(deatail.product_id, deatail.product_title, deatail.price)}
            >
              <RiDeleteBin5Fill className="text-xl md:text-2xl font-bold text-red-700 w-10 h-10 md:w-14 md:h-14 border-2 border-red-700 rounded-full p-2 animate-bounce" />
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal payment={payment} />
    </div>
  );
};

export default Dashboard;
