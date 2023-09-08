import React, { useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { SignUpWrapper,
  Label,
  Input,
  StyledInlineErrorMessage,
  Submit,
  FormWrapper, } from './SignUpStyles.js'
import * as Yup from "yup";
import { createUser } from "../../axios/axios-user.js"

const SignUp = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState();  
  const regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; 

  return (
    <SignUpWrapper>
      <div>
        <h1>Create Account</h1>
        {/* <hr></hr> */}
      </div>
     

      <Formik
        initialValues={{
          fullname: "",
          email: "",
          password: "",
        }}
        validationSchema={Yup.object().shape({
          fullname: Yup.string()
            .min(2, "Your name is too short")
            .required("Please enter your full name"),
          email: Yup.string()
            .matches(regEmail, "The email is incorrect")
            .required("Please enter your email"),
          password: Yup.string()
            .min(6, "Minimum of 6 characters")
            .required("Please create some password"),
        })}
        onSubmit={async (values, actions) => {
          const user = await createUser(values.fullname, values.email, values.password);
          actions.resetForm();
          if (user) { navigate("/SignIn")}
          // console.log(user);
         
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
                <Label htmlFor="fullname">
                  Fullname
                  <Input
                    type="text"
                    name="fullname"
                    autoComplete="name"
                    placeholder="your fullname"
                    valid={touched.fullname && !errors.fullname}
                    error={touched.fullname && errors.fullname}
                  />
                </Label>
                {errors.fullname && touched.fullname && (
                  <StyledInlineErrorMessage>
                    {errors.fullname}
                  </StyledInlineErrorMessage>
                )}
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
      
    
      
    </SignUpWrapper>
  )
}

export default SignUp
