import React from 'react';
import imgDown from '../../src/assets/assets/banner.jpg'

const Bannerdown = () => {
    return (
        <div className='lg:w-8/12 w-10/12  mx-auto relative'>
    <div className='rounded-xl  h-46 mx-auto p-4 border-2 lg:-mt-36 -mt-20'> 
        <img className='border-2 mx-auto  rounded-xl' src={imgDown} alt="" />
    </div>
</div>

    );
};

export default Bannerdown;