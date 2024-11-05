import React from 'react';
import { Link } from 'react-router-dom';

const Modal = ({payment}) => {
    return (
        <div>
  <dialog id="my_modal_1" className="modal">
    <div className="modal-box flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition-all duration-300">
      <div className='w-16 h-16 mb-4'>
        <img 
          className='w-full h-full rounded-full border-4 border-purple-600 shadow-lg' 
          src="https://i.ibb.co/com/mC5NTCC/Group.png" 
          alt="Success" 
        />
      </div>
      <h3 className="font-bold text-2xl text-purple-600">Payment Successful!</h3>
      <p className="py-2 text-gray-700">Thank you for your purchase!</p>
      <p className='font-bold text-lg text-purple-800'>Total: {payment}</p>
      <div className="modal-action mt-4">
        <form method="dialog">
          <Link to="/" className="btn w-full bg-purple-600 text-white hover:bg-purple-700 transition duration-200 rounded-lg shadow-md">
            Close
          </Link>
        </form>
      </div>
    </div>
  </dialog>
</div>

    );
};

export default Modal;