
import React, { useState } from 'react';
import ButtonOverlay from "../ButtonOverlay/ButtonOverlay" 
import "./WalletChat.css"
export default function WalletChatWidget(){
    const [isOpen, setIsOpen] = useState(false);
    const url = "https://app.walletchat.fun/"//"app.walletchat.fun" //http://localhost:3000
    const clickHandler = (e) =>{
        setIsOpen(!isOpen)
    }
    return (
        <div id="wallet-chat-widget__container">
            {/* {isOpen && (
                <iframe id="wallet-chat-widget" src={url}></iframe>
            )} */}
            <iframe id="wallet-chat-widget" style={{
                    height:isOpen?"":"0px",
                    width:isOpen?"":"0px",
                    minHeight:isOpen?"":"0px",
                    minWidth:isOpen?"":"0px"
                    // display: isOpen?"block":"none"
                }} src={url}></iframe>
            <ButtonOverlay isOpen={isOpen} clickHandler={clickHandler}/>
        </div>
    )
}
