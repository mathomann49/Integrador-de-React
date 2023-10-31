import React, { useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { SignInWrapper, StyledLinkAccount } from './SignInStyles'
import {
  Label,
  Input,
  StyledInlineErrorMessage,
  Submit,
  FormWrapper, } from '../SignUp/SignUpStyles'
import * as Yup from "yup";
import { signInUser } from "../../axios/axios-user";
import { setCurrentUser } from "../../redux/user/user";
import { useDispatch } from "react-redux";
import useRedirect from "../../Hooks/useRedirect";
import { Link } from "react-router-dom";

const SignIn = () => {
  useRedirect("/");
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState();

  return (
    <SignInWrapper>
      <div>
        <h1>Sign In</h1>
      </div>
      
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("The email is incorrect")
            .required("Please enter your email"),
          password: Yup.string()
            .required("Please enter your password"),
        })}
        onSubmit={async (values) => {
          const user = await signInUser(values.email, values.password);
          if (user) {
            dispatch(setCurrentUser({
              ...user.user,
              token: user.token
            }))
          }
          setFormValues(values);

          const timeOut = setTimeout(() => {
            // actions.setSubmitting(false);

            clearTimeout(timeOut);
          }, 1000);
        }}
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
              <Form name="contact"  >
                <Label htmlFor="email">
                  Email
                  <Input
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="your email"
                    valid={touched.email && !errors.email}
                    error={touched.email && errors.email}
                  />
                </Label>
                <ErrorMessage name="email">
                  {(msg) => (
                    <StyledInlineErrorMessage>{msg}</StyledInlineErrorMessage>
                  )}
                </ErrorMessage>
                <Label htmlFor="password">
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
                )}
                <StyledLinkAccount>Don't have an account? <Link to= "/SignUp"><span>sign up</span></Link></StyledLinkAccount>
                <Submit type="submit" onSubmit={handleSubmit} disabled={!isValid || isSubmitting}>
                  {isSubmitting ? `Submiting...` : `Submit`}
                </Submit>
              </Form>
             </FormWrapper>
              
              <hr />
              
            </>
          );
        }}
      </Formik>
    </SignInWrapper>
  )
}

export default SignIn
