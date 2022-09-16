
import React, { useState } from 'react';
import ButtonOverlay from "../ButtonOverlay/ButtonOverlay" 
import "./WalletChat.css"
export default function WalletChatWidget(){
    const [isOpen, setIsOpen] = useState(false);
    const clickHandler = (e) =>{
        setIsOpen(!isOpen)
    }
    return (
        <div id="wallet-chat-widget__container">
            {isOpen && (
                <iframe id="wallet-chat-widget" src="https://app.walletchat.fun"></iframe>
            )}
            
            <ButtonOverlay isOpen={isOpen} clickHandler={clickHandler}/>
        </div>
    )
}
