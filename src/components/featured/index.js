import React from 'react';
import Carousel from './Carousel';
import TimeCounter from './TimeCounter';



const Featured = () => {
    return (
        <div style={{position: 'relative'}}>

            <Carousel />

            <div className="title_name">
                <div className="wrapper">
                    My Business Name 
                </div>
            </div>
            
            <TimeCounter />
        </div>
    );
};

export default Featured;