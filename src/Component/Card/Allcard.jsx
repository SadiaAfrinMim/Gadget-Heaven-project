import React, { createContext } from 'react';
import Cardbanner from './Cardbanner';
import CardDetails from './Carddetails';




const Allcard = () => {
    return (
        <div>
          
            <Cardbanner></Cardbanner>
            <CardDetails></CardDetails>
          
           
        </div>
    );
};

export default Allcard;