import React, { useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { SignInWrapper, StyledLinkAccount } from './SignInStyles'
import { SignUpWrapper,PageWrapper,
  Title,
  Label,
  Input,
  StyledInlineErrorMessage,
  Submit,
  CodeWrapper,
  FormWrapper, } from '../SignUp/SignUpStyles'
import * as Yup from "yup";

const SignIn = () => {

  const [formValues, setFormValues] = useState();

  return (
    <SignInWrapper>
      <div>
        <h1>Sign In</h1>
        {/* <hr></hr> */}
      </div>
      
      <Formik
        initialValues={{
          fullname: "",
          email: "",
        }}
        validationSchema={Yup.object().shape({
          fullname: Yup.string()
            .min(2, "Your name is too short")
            .required("Please enter your full name"),
          email: Yup.string()
            .email("The email is incorrect")
            .required("Please enter your email"),
          password: Yup.string()
            .required("Please create some password"),
        })}
        onSubmit={(values, actions) => {
          console.log(values);
          setFormValues(values);

          const timeOut = setTimeout(() => {
            actions.setSubmitting(false);

            clearTimeout(timeOut);
          }, 1000);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          isSubmitting,
          isValidating,
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
                    placeholder="create a password"
                    valid={touched.password && !errors.password}
                    error={touched.password && errors.password}
                  />
                </Label>
                {errors.password && touched.password&& (
                  <StyledInlineErrorMessage>
                    {errors.password}
                  </StyledInlineErrorMessage>
                )}
                <StyledLinkAccount>Don't have an account? <a href="#">Sign up</a></StyledLinkAccount>
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
