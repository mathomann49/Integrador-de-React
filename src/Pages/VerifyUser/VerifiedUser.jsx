import React from 'react'
import { VerifyUserWrapper } from './VerifyUserStyles'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { setCurrentUser } from "../../redux/user/user";

const VerifiedUser = () => {
    const currentUser = useSelector(state => state.user.currentUser);
    const navigate = useNavigate();
    const dispatch = useDispatch();

  return (
    <VerifyUserWrapper>
      {currentUser?.verified ? (
        <div className='container'>
        <h2>User succesfully verified!</h2>
        <p>You must re-login so that all the features of the app work correctly</p>
        <button onClick={() => {
          dispatch(setCurrentUser(null));
          navigate('/SignIn');}}
        >Continue to log-in</button>
        </div>
      ) : (
        <div className='container'>
        <h2>Your account has been created successfully, now you must validate it</h2>
        <button onClick={() => {navigate('/VerifyUser/VerifyUser');}}
        >Validate</button>
        </div>
      )}
        
    </VerifyUserWrapper>
  )
}

export default VerifiedUser