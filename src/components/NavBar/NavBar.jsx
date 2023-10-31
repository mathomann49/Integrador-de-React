import React, { useState } from 'react'
import { NavBarContainerStyled, 
  StyledButton, 
  CartContainerStyled, 
  MenuContainerStyled } from "./NavBarStyles";
import { SlBasket } from "react-icons/sl";
import { FaBars, FaRegWindowClose } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
// import { DiHtml5Connectivity } from "react-icons/di";
import { GiOctopus } from "react-icons/gi";
import Cart from './Cart/Cart';
import { toggleHiddenCart } from '../../redux/cart/CartSlice';
import { useSelector, useDispatch } from "react-redux";
import ModalSignIn from './ModalSignIn/ModalSignIn';

const NavBar = () => {
  const navigate = useNavigate();
  const currentUser = useSelector(state => state.user.currentUser);
  const quantityCartItems = useSelector((state) => 
  state.cart.cartItems).reduce((acc, item) => (acc+=item.quantity), 0);
  const OpenCart = useSelector(state => state.cart.hidden)
  const [Mobile, setMobile] = useState(false)
  // const [OpenCart, setOpenCart] = useState(false)
  const dispatch = useDispatch();
  
  return (
      <NavBarContainerStyled>
        <div className='logo'>
         <Link to= "/"> 
            <h1><em>OCTOPUS</em><sub>store</sub> <GiOctopus /></h1>
          </Link>
        </div>
        <CartContainerStyled onClick={()=>dispatch(toggleHiddenCart())}>
            <SlBasket style={{color: "blueviolet", fontSize: "35px", paddingtop: "20px", cursor: "pointer"}} /><span>{quantityCartItems}</span>
            </CartContainerStyled>

      <div className='container'>
        <ul className= {Mobile? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false) }>
          <Link to= "/"><li className='links'>Home</li></Link>
          <Link to= "/Products"><li className='links'>Products</li></Link>
          <Link to= "/Contact"><li className='links'>Contact</li></Link>
          
          <li >{currentUser ? 
            <Link to= "/Purchases"><StyledButton>My purchases</StyledButton></Link> : 
            <Link to= "/SignUp"><StyledButton>sign up</StyledButton></Link>}
          </li>
          <li>{currentUser ? 
            <ModalSignIn /> : 
            <StyledButton 
             variant="outline" onClick={() => navigate("/SignIn") }>sign in
            </StyledButton>}
          </li>
        </ul>

          <MenuContainerStyled onClick={() => setMobile(!Mobile)}>
            {Mobile? <FaRegWindowClose style={{color: "blueviolet", fontSize: "35px", paddingtop: "20px", cursor: "pointer"}}/> : <FaBars style={{color: "blueviolet", fontSize: "35px", paddingtop: "20px", cursor: "pointer"}}/>} 
          </MenuContainerStyled>
      </div>  
      
      {!OpenCart && <Cart onClick= {() => dispatch(toggleHiddenCart())}/>}    
    </NavBarContainerStyled>
    
  )
}

export default NavBar
