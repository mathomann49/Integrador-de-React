import React from 'react';
import { PurchaseMadeWrapper } from './PurchaseMadeStyle';
import { useNavigate } from "react-router-dom";

const PurchaseMade = () => {
    const navigate = useNavigate();
    const purchaseCode = () => {
        return Math.floor(Math.random()*10000)};
  return (
    <PurchaseMadeWrapper>
        <div className='infoBox'>
            <h1> Congratulations!</h1>
            <p><span>Your purchase has been made successfully.</span>
            <span> Your <b>purchase code</b> is <b>{purchaseCode()}</b>.</span>
            <span> Please, check your email box, there you will find 
            all the information related to your purchase. Thank you!</span></p>
            <button onClick={() => navigate("/")}>accept</button>
        </div>
    </PurchaseMadeWrapper>
    
  )
}

export default PurchaseMade