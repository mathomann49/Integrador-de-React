import React from 'react';
import { PurchaseMadeWrapper } from './PurchaseMadeStyle';
import { useNavigate } from "react-router-dom";


const PurchaseMade = () => {
    const navigate = useNavigate();
    // const {purchases, error} = useSelector(state => state.purchases);
    // const purchaseCode = () => {
    //     return Math.floor(Math.random()*10000)};
  return (
    <PurchaseMadeWrapper>
        <div className='infoBox'>
            <h1> Congratulations!</h1>
            <p>Your purchase has been made successfully.
             The status of your purchase is <b>pending </b>
              and will be delivered within 48 hours.
             To see a summary of it press "continue".  
             Thank you! </p>
            <button onClick={() => navigate("/Purchases")}>Continue</button>
        </div>
    </PurchaseMadeWrapper>
    
  )
}

export default PurchaseMade