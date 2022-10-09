import React, { useState } from 'react';
import {WalletChatWidget} from 'react-wallet-chat'
import 'react-wallet-chat/dist/index.css'

const Widget = () => {
    const [subPage, setSubPage] = useState("Swap");
    return (
        <div>
        <div className='relative h-[90vh]'>
            <div className='flex justify-around mt-4'>
                <div className='flex rounded-3xl bg-white p-1'>
                    {["Swap", "Pool", "Vote", "Charts"].map((val, idx) => {
                        return (
                            <>
                                {(val == subPage) ? (
                                    <div className='cursor-pointer rounded-3xl p-2 bg-slate-200'>{val}</div>
                                ) : (
                                    <div className='cursor-pointer rounded-3xl p-2'>{val}</div>
                                )}
                            </>
                        )
                    })}
                </div>
            </div>
            <div className='flex justify-center items-center h-1/2'>
                    <div className='w-1/3 h-1/2 bg-white p-4 rounded-3xl'>
                        <div className='mb-4'>
                            Swap
                        </div>
                        <div className="bg-slate-100 rounded-3xl p-6 mb-4 text-lg	">
                            0.0
                        </div>
                        <div className="bg-slate-100 rounded-3xl p-6 mb-8 text-lg	">
                            0.0
                        </div>
                        <div className='bg-pink-200 text-pink-800 rounded-3xl text-center p-4'>
                            Just For Test!
                        </div>
                    </div>
                </div>
            <div className='fixed top-0 left-0 right-0' style={
                {
                    width: "200vw",
                    height: "200vh",
                    transform: "translate(-50vw, -100vh)",
                    background: "radial-gradient(50% 50% at 50% 50%, rgba(252, 7, 125, 0.063) 0px, rgba(255, 255, 255, 0) 100%)",
                    backgroundBlendMode: "multiply, normal",
                    pointerEvents: "none",
                    zIndex: "-1",
                }
            }>

            </div>
        </div>
        <WalletChatWidget />
        </div>
    );
};

export default Widget;

