import React from 'react'
import { CartItemContainer } from "./CartStyles";
import { adjustedPrice } from '../../../Utils/Utils';
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../../redux/cart/CartSlice";

const CartItemDisplay = ({image, title, category, price, quantity, id}) => {
  const dispatch = useDispatch()
  
  return (
    <CartItemContainer>
     <div className="CartItem">
        <div className='itemImage'>
             <img src={image} alt={title}/>  
        </div>
        <div className="itemData">
            <div className='itemDataData'>
                <p className='itemTitle'>{title}</p>
                {/* <p className="itemCategory">Category: <span>{item.category}</span></p> */}
                <span className="itemPrice">$ {adjustedPrice(price)}</span> 
                </div>
                <div className="itemQuantifier">
                    <span className="increase" onClick={() => dispatch(addToCart({image, title, category, price, quantity, id}))}> + </span>
                    <span className="itemUnits">{quantity}</span>
                    <span className="decrease" onClick={() => dispatch(removeFromCart(id))}> - </span>
                </div>
            </div>        
    </div>
    </CartItemContainer>
  )
}

export default CartItemDisplay