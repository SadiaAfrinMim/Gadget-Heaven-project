import React, { useEffect } from 'react';

const Statistic = () => {
    useEffect(() => {
        document.title = 'Statistic - Gadget Heaven';
    }, []);

    return (
        <div className="w-11/12 mx-auto py-12 text-center mt-20">
            <h1 className="text-4xl font-bold mb-4">No Data Available</h1>
        
                
            
        </div>
    );
};

export default Statistic;
