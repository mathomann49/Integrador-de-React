import React from 'react';
import { useNavigate } from "react-router-dom";
import { CartWrapper} from "./CartStyles";
import { clearCart, toggleHiddenCart } from "../../../redux/cart/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import CartItemDisplay from './CartItemDisplay';


const Cart = () => {
    const tab = '\u00A0\u00A0\u00A0';
    const {cartItems, shippingCost} = useSelector(state => state.cart);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const subTotal = cartItems.reduce((acc,item) => {
        return (acc += item.price * item.quantity)
    }, 0);  

  return (
    <CartWrapper>
        <div className="cartContainer">
        <div className='buttonsContainer'>
                   <button className="btnAdd" onClick={ () => {
                    navigate("/CheckOut");
                    dispatch(toggleHiddenCart())}}
                    disabled= {!cartItems.length}>Check Out</button>
                   <button className="btnRemove" onClick={() => {
                    dispatch(clearCart())}} disabled= {!cartItems.length} 
                    >Remove Cart</button>
                   <button className="btnKeep"  onClick={()=> dispatch(toggleHiddenCart())}>keep looking</button> 
                </div> 
                <h3>Selected Items</h3>
                <div className='cartItemsContainer'>
                    {
                    cartItems.length ? (
                        cartItems.map((item) => {
                            console.log(item);
                            return <CartItemDisplay {...item} key={item.id}/>                        
                        })
                    ) : (
                        <p>Cart is empty</p>
                    )
               }
                </div>
                 
                <div className="shopTotal">
                    <p className="Shipp">Sub-Total:.......$ <b>{(subTotal + 0.00).toFixed(2)}</b></p>
                    <p className="Shipp">shipping Cost:.${tab}<b>{(shippingCost + 0.00).toFixed(2)}</b></p>
                    <p className="Shipp">Total:...............$ <b>{(subTotal + shippingCost).toFixed(2)}</b></p>      
                </div>
                
                
           </div>
    </CartWrapper>
  )
}

export default Cart