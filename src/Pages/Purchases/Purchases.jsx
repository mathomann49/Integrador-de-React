import React, { useEffect } from 'react'
import { PurchasesContainer } from './PurchasesStyle'
import { useDispatch, useSelector } from 'react-redux'
import { getPurchases } from '../../axios/axios-purchases';
import { clearError, fetchPurchasesFail } from '../../redux/purchases/purchases';
import CardPurchase from "./CardPurchase"
import { useNavigate } from "react-router-dom"
 
const Purchases = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user.currentUser);
    const {purchases, error} = useSelector(state => state.purchases.purchases);
    const navigate = useNavigate();

    useEffect(() => {
      if (!currentUser) {
        navigate("/");
      }
      if (!purchases) {
        getPurchases(dispatch, currentUser)
      }
      if (!currentUser?.token) {
        dispatch(fetchPurchasesFail());
      }
      else {
        error && dispatch(clearError());
      }
    
    }, [currentUser, purchases, error, dispatch, navigate])
    
  return (
    <PurchasesContainer>
      <div>
        <h1>My Purchases</h1>
      </div>
      <CardPurchase />
    </PurchasesContainer>
    
  )
}

export default Purchases