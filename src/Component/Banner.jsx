import React from 'react';

const Banner = () => {
    return (
      <div className="w-11/12 mx-auto pt-12">
      <div className="hero rounded-b-xl bg-[#9538E2] text-white lg:pb-32 pb-16">
        <div className="hero-content text-center px-4 py-8 lg:py-12">
          <div className="lg:w-11/12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="py-4 sm:py-6 text-base sm:text-lg lg:text-xl lg:w-8/12 lg:mx-auto">
              Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
            </p>
            <button className="btn bg-white text-[#9538E2] font-bold text-base rounded-full ">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
    
    );
};

export default Banner;