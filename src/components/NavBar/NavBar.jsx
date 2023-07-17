import React, { useState } from 'react'
import { NavBarContainerStyled, 
  StyledButton, 
  CartContainerStyled, 
  MenuContainerStyled,
  LoginModal } from "./NavBarStyles";
import { SlBasket } from "react-icons/sl";
import { FaBars, FaRegWindowClose, FaUser, FaUserSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { DiHtml5Connectivity } from "react-icons/di";
import { GiOctopus } from "react-icons/gi";
import Cart from './Cart/Cart';
import { toggleHiddenCart } from '../../redux/cart/CartSlice';
import { useSelector, useDispatch } from "react-redux";

const NavBar = () => {
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
          <h1><em>OCTOPUS</em><sub>shop</sub> <GiOctopus /></h1>
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
      <Link to= "/SignUp"><li><StyledButton>sign up</StyledButton></li></Link>
      <Link to= "/SignIn"><li><StyledButton variant="outline">sign in</StyledButton></li></Link>
      </ul>
          <MenuContainerStyled onClick={() => setMobile(!Mobile)}>
            {Mobile? <FaRegWindowClose style={{color: "blueviolet", fontSize: "35px", paddingtop: "20px", cursor: "pointer"}}/> : <FaBars style={{color: "blueviolet", fontSize: "35px", paddingtop: "20px", cursor: "pointer"}}/>} 
          </MenuContainerStyled>
          <LoginModal>
            <span><FaUser /> Miguel Thomann</span>
            <span className='close'><FaUserSlash /> Sign off</span>
          </LoginModal>
      </div>  
      {OpenCart && <Cart onClick= {() => dispatch(toggleHiddenCart())}/>}    
    </NavBarContainerStyled>
    
  )
}

export default NavBar
