import React, { useState } from 'react';

const Defi = () => {
    const [subPage, setSubPage] = useState("swap");
    return (
        <div className='relative'>
            <div className='flex justify-around'>
                <div className='flex '>
                    {["Swap", "Pool", "Vote", "Charts"].map((val, idx) => {
                        return (
                            <div className='rounded-lg'>{val}</div>
                        )
                    })}
                </div>
            </div>
            <div className='fixed top-0 left-0 right-0' style={
                {
                    width: "200vw",
                    height: "200vh",
                    transform: "translate(-50vw, -100vh)",
                    background: "radial-gradient(50% 50% at 50% 50%, rgba(252, 7, 125, 0.063) 0px, rgba(255, 255, 255, 0) 100%)",
                    backgroundBlendMode: "multiply, normal",
                    pointerEvents: "none"
                }
            }>

            </div>
        </div>
    );
};

export default Defi;

