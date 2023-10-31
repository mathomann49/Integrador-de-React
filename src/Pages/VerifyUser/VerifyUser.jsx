import React, { useState } from 'react'
import { VerifyUserWrapper } from './VerifyUserStyles'
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom';
import { verifyUser } from '../../axios/axios-user.js'
import { setCurrentUser } from "../../redux/user/user";
import {
    Label,
    Input,
    StyledInlineErrorMessage,
    Submit,
    FormWrapper, } from '../SignUp/SignUpStyles'

    

const VerifyUser = () => {
  const currentUser = useSelector(state => state.user.currentUser);
  console.log(currentUser.verified);
  // const [verified, setVerified] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <VerifyUserWrapper>
    {/* {currentUser?.verified ? ( */}
      {/* <div>
        <h2>User succesfully verified!</h2>
        <p>You must re-login so that all the features of the app work correctly</p>
        <button onClick={() => {navigate('/SignIn');}}
        >Continue to log-in</button>
        </div> */}
      {/* ) : ( */}
        <div>
        <h1>Verify User</h1>
        <p>Copy the 6-digit code 
        that we sent you to the mailbox declared in sign up and paste it in "your code"</p>
    
    <Formik
        initialValues={{
          code: "",
        }}
        validationSchema={Yup.object().shape({
          code: Yup.string()
            .required("Please enter your code"),
          
        })}
        onSubmit={async (values, actions) => {
          await verifyUser(currentUser.email, values.code);
          actions.resetForm();
          dispatch(setCurrentUser({ ...currentUser, verified: true}));
          navigate('/VerifyUser/VerifiedUser');

          const timeOut = setTimeout(() => {
            actions.setSubmitting(false);
             clearTimeout(timeOut);
           }, 1000);

          }
          // const timeOut = setTimeout(() => {
          //   clearTimeout(timeOut);
          // }, 1000);
        }
      >
        {({
          errors,
          touched,
          handleSubmit,
          isSubmitting,
          isValid,
        }) => {
          return (
            <>
             <FormWrapper>
              <Form name="code"  >
                <Label htmlFor="code">
                  code
                  <Input
                    type="string"
                    name="code"
                    autoComplete="code"
                    placeholder="your code"
                    valid={touched.code && !errors.code}
                    error={touched.code && errors.code}
                  />
                </Label>
                <ErrorMessage name="code">
                  {(msg) => (
                    <StyledInlineErrorMessage>{msg}</StyledInlineErrorMessage>
                  )}
                </ErrorMessage>
                {/* <Label htmlFor="password">
                  Password
                  <Input
                    type="password"
                    name="password"
                    placeholder="enter the password"
                    valid={touched.password && !errors.password}
                    error={touched.password && errors.password}
                  />
                </Label>
                {errors.password && touched.password&& (
                  <StyledInlineErrorMessage>
                    {errors.password}
                  </StyledInlineErrorMessage> 
                )}*/}
                {/* <StyledLinkAccount>Don't have an account? <Link to= "/SignUp"><span>sign up</span></Link></StyledLinkAccount> */}
                <Submit type="submit" onSubmit={handleSubmit} disabled={!isValid || isSubmitting}>
                  {isSubmitting ? `verifying...` : `verify`}
                </Submit>
              </Form>
             </FormWrapper>
              
            </>
          );
        }}
      </Formik> 
      </div>
        
      {/* )}    */}
    </VerifyUserWrapper>
  )
}

export default VerifyUser