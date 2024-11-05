import React, { useEffect } from 'react';

const Contac = () => {
  useEffect(()=>{
    document.title='contact-Gadget Heave'
  },[])
    return (
        <div className="w-full flex justify-center items-center min-h-screen bg-gray-100 py-16 px-4">
        <div className="w-full max-w-3xl">
          {/* Header Section */}
          <div className="hero rounded-t-xl bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white p-10 text-center shadow-lg space-y-8">
            <h1 className="text-4xl font-extrabold mb-10">Contact with Us</h1>
            
           
          </div>
      
          {/* Contact Form Section */}
          <div className="bg-white text-gray-800 py-8 px-6 lg:px-16 rounded-b-xl shadow-lg -mt-6">
            <h2 className="text-2xl font-semibold text-center text-purple-700 mb-6">Send Us a Message</h2>
            <form className="space-y-6 max-w-md mx-auto">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg">Name</span>
                </label>
                <input 
                  type="text" 
                  placeholder="Enter your name" 
                  className="input input-bordered w-full rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
      
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold rounded-fulltext-lg">Email</span>
                </label>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="input input-bordered w-full rounded-lg focus:outline-none focus:ring-2 rounded-full focus:ring-purple-600"
                />
              </div>
      
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg">Message</span>
                </label>
                <textarea 
                  placeholder="Your message" 
                  className="textarea textarea-bordered w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 "
                  rows="5"
                ></textarea>
              </div>
      
              <button 
                type="submit" 
                className="btn bg-gradient-to-r from-purple-600 to-purple-500 text-white font-bold w-full rounded-full py-3 hover:bg-purple-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      

    );
};

export default Contac;