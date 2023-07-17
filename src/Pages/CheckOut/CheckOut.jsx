import React, { useState } from 'react'
import { CheckOutWrapper, CartItemContainer } from "./CheckOutStyles";
import { Formik, Form, ErrorMessage } from "formik";
import paymentsmethods from "../../pay_methods.png";
import { useDispatch, useSelector } from "react-redux";
import { SignUpWrapper,PageWrapper,
  Title,
  Label,
  Input,
  StyledInlineErrorMessage,
  Submit,
  CodeWrapper,
  FormWrapper, } from '../SignUp/SignUpStyles'
import * as Yup from "yup";

const CheckOut = () => {
    const {cartItems, shippingCost} = useSelector(state => state.cart); 
    const dispatch = useDispatch();
    const [formValues, setFormValues] = useState();

    const subTotal = cartItems.reduce((acc,item) => {
      return (acc += item.price * item.quantity)
    }, 0);

  return (
    <CheckOutWrapper>
      
      <div className='container'>
        <div className='divForm'>
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
                  Street Address
                  <Input
                    type="text"
                    name="address"
                    autoComplete="address"
                    placeholder="#440-Josua st."
                    valid={touched.email && !errors.email}
                    error={touched.email && errors.email}
                  />
                </Label>
                <ErrorMessage name="address">
                  {(msg) => (
                    <StyledInlineErrorMessage>{msg}</StyledInlineErrorMessage>
                  )}
                </ErrorMessage>
                <Label htmlFor="password">
                  City
                  <Input
                    type="text"
                    name="city"
                    placeholder="Los Alamos"
                    valid={touched.password && !errors.password}
                    error={touched.password && errors.password}
                  />
                </Label>
                {errors.password && touched.password&& (
                  <StyledInlineErrorMessage>
                    {errors.password}
                  </StyledInlineErrorMessage>
                )}
                <Label htmlFor="password">
                  State
                  <Input
                    type="text"
                    name="city"
                    placeholder="Los Alamos"
                    valid={touched.password && !errors.password}
                    error={touched.password && errors.password}
                  />
                </Label>
                {errors.password && touched.password&& (
                  <StyledInlineErrorMessage>
                    {errors.password}
                  </StyledInlineErrorMessage>
                )}
                <Label htmlFor="password">
                  Phone Number
                  <Input
                    type="text"
                    name="city"
                    placeholder="Los Alamos"
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
                  {isSubmitting ? `Submiting...` : `Payment Details`}
                </Submit>
              </Form>
             </FormWrapper>
              
              <hr />
              
            </>
          );
        }}
      </Formik>
      <div className='payMethods'>
            <div className='divCard'>
              {/* <h3>we accept</h3> */}
              <img classname= "payimage" style={{ height: "70px"}}
              src={paymentsmethods} 
              alt='payment Methods'/>
            </div>
          </div>
        </div>
        <div className='selectCart'>
        <div>
        <h1>Check Out</h1>
      </div>
          <div className='cardProductsCheckOut'>
          <span className='header'>your selection</span>
          <div className="cartContainer">
                
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
                                                <span className="decrease"> - </span>
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
                 
                
                
                
           </div>
           <div className="shopTotal">
                    <p className="Shipp">Sub-Total:.....$ <b>{(subTotal + 0.00).toFixed(2)}</b></p>
                    <p className="Shipp">shipping Cost:.$ <b>{(shippingCost + 0.00).toFixed(2)}</b></p>
                    <p className="Shipp">Total:.........$ <b>{(subTotal + shippingCost).toFixed(2)}</b></p>      
                </div>
          </div>
          {/* <div className='payMethods'>
            <div className='divCard'>
              <h3>we accept</h3>
              <img classname= "payimage" style={{width: "18.75rem"}}
              src={paymentsmethods} 
              alt='payment Methods'/>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </CheckOutWrapper>
  )
}

export default CheckOut