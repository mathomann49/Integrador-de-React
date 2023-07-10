import React from 'react';
import { useNavigate } from "react-router-dom";
import { CartWrapper, CartItemContainer } from "./CartStyles";
import { addToCart, clearCart, removeFromCart, toggleHiddenCart } from "../../../redux/cart/CartSlice";
import { useDispatch, useSelector } from "react-redux";


const Cart = ({image, title, category, price, quantity, id}) => {
    const {cartItems, shippingCost} = useSelector(state => state.cart); 
    const navigate = useNavigate();
    const dispatch = useDispatch();
    

    const subTotal = cartItems.reduce((acc,item) => {
        return (acc += item.price * item.quantity)
    }, 0);

// const increaser = () => {
//     return (item.quantity == item.quantity + 1)
// }
    

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
                            return <CartItemContainer {...item} key={item.id}>
                                <div className="CartItem">
                                    <div className='itemImage'>
                                        <img src={item.image} alt={item.title}/>  
                                    </div>
                                        <div className="itemData">
                                            <div className='itemDataData'>
                                                <p className='itemTitle'>{item.title}</p>
                                                {/* <p className="itemCategory">Category: <span>{item.category}</span></p> */}
                                                 <span className="itemPrice">$ {item.price}</span> 
                                            </div>
                                            <div className="itemQuantifier">
                                                <span className="increase" > + </span>
                                                <span className="itemUnits">{item.quantity}</span>
                                                <span className="decrease" onClick={() => {
                                                    dispatch(removeFromCart(id))
                                                }}> - </span>
                                            </div>
                                        </div>
                                        </div>
                            </CartItemContainer>         
                        })
                    ) : (
                        <p>Cart is empty</p>
                    )
               }
                </div>
                 
                <div className="shopTotal">
                    <p className="Shipp">Sub-Total:.....$ <b>{subTotal}</b></p>
                    <p className="Shipp">shipping Cost:.$ <b>{shippingCost}.00</b></p>
                    <p className="Shipp">Total:.........$ <b>{subTotal + shippingCost}</b></p>      
                </div>
                
                
           </div>
    </CartWrapper>
  )
}

export default Cart