import React from 'react'
import { LoginModal } from '../NavBarStyles'
import { FaUser, FaUserSlash } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from "../../../redux/user/user";

const ModalSignIn = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user.currentUser);
  return (
    <LoginModal>
        <span><FaUser /> {currentUser.name}</span>
        <span className='close' onClick={() => 
        dispatch(setCurrentUser(null))}><FaUserSlash />Sign out</span>
    </LoginModal>
  )
}

export default ModalSignIn