import React, { useEffect } from 'react';

const Statistic = () => {
    useEffect(()=>{
        document.title = 'statistic-Gadget Heaven'
    },[])
    return (
        <div>
            <h1>statistic</h1>
        </div>
    );
};

export default Statistic;