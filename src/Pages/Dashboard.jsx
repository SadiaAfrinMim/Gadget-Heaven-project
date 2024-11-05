import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredCartItems, removecard } from '../Utitlity/Localstorage';
import { RiDeleteBin5Fill } from "react-icons/ri";
import Modal from '../Component/Modal';

const Dashboard = () => {
    const dashboardDetails = useLoaderData(); 
  
    const [dashboard, setDashboard] = useState([]);
    const [amount,setAmount] = useState(0) 
    const [payment, setPayment] = useState(0)
    
    
    useEffect(() => {
      document.title = 'dashboard-Gadget Heave'
        const addToCardId = getStoredCartItems()
        const convertIntProductId = addToCardId.map(id => parseInt(id));
    const filterCard = dashboardDetails.filter(sinCard => convertIntProductId.includes(sinCard.product_id)) 
    setDashboard(filterCard);

    const totalCost = filterCard.reduce((sum, sinCard) => sum + sinCard.price, 0).toFixed(2);
    setAmount(totalCost);
        
        
    }, [dashboardDetails, setDashboard]);



    const handleSortDs = ()=>{
        const sorted = [...dashboard].sort((a, b)=> b.price - a.price)
        setDashboard(sorted)
      }
    
      const handlePurchaseBtn= ()=>{
        localStorage.removeItem('card-list')
        setDashboard([])
        document.getElementById('my_modal_1').showModal()
        setPayment(amount)
        setAmount(0)
      }

      
      const handleRemoveToLS = (product_id, product_title, price)=>{
        removecard(product_id, product_title);
    
        const addToCardId = getStoredCartItems();
        const convertIntCardId = addToCardId.map(id => parseInt(id));
        const filterCard = dashboardDetails.filter(card => convertIntCardId.includes(card.product_id)) 
        setDashboard(filterCard);
    
        setAmount((amount - price).toFixed(2))
      }
   
    

    return (
    
        <div className="w-11/12 mx-auto felx justify-between">
          <div className='flex justify-between'>
              
          <div>
            <h2 className="text-2xl font-semibold text-gray-700">Cart</h2>
            </div>
           <div>
          
            <div className="flex gap-4">
            <p className="text-2xl font-bold text-purple-600"> Total Amount:{amount} </p>
                <button onClick={handleSortDs} className="bg-purple-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-purple-700 transition">
                Sort by Price
                </button>
                <button onClick={handlePurchaseBtn} className="bg-gray-200 text-purple-600 font-semibold py-2 px-6 rounded-full hover:bg-gray-300 transition">
                Purchase
                </button>
           </div>
          </div>
            </div>
          
               {
                dashboard.map(deatail=> <div className="bg-white flex items-center justify-between p-6 mb-8 rounded-lg shadow-lg">
  
                  <div className="flex items-center gap-4">
                    <img 
                      src={deatail.product_image}
                      className="w-80 h-48 object-cover rounded-lg"
                    />
                    
                    <div className="ml-4">
                      <h1 className="text-2xl font-bold mb-2">Product: {deatail.product_title}</h1>
                      <p className="text-lg font-semibold">Price: ${deatail.price}</p>
                      <p className="mt-2">Category: {deatail.category}</p>
                      <p className="mt-2">Rating: {deatail.rating} / 5</p>
                    </div>
                  </div>
                
                  <div 
                    className="cursor-pointer" 
                    onClick={() => handleRemoveToLS(deatail.product_id, deatail.product_title, deatail.price)}
                  >
                    <RiDeleteBin5Fill className="text-2xl font-bold text-red-700 w-14 h-14 border-2 border-red-700 rounded-full p-2 animate-bounce" />
                  </div>
                  
                </div>
               )}
               <Modal>{payment}</Modal>

            
        </div>
    );
};

export default Dashboard;
