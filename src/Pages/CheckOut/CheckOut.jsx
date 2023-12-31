import React, { useState } from 'react'
import CartItemDisplay from '../../components/NavBar/Cart/CartItemDisplay';
import { CheckOutWrapper, FormWrapper, Submit  } from "./CheckOutStyles";
import { Formik, Form, ErrorMessage } from "formik";
import paymentsmethods from "../../pay_methods.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Label, Input, StyledInlineErrorMessage } from '../SignUp/SignUpStyles'
import * as Yup from "yup";
import { clearCart } from "../../redux/cart/CartSlice";
import { createPurchase } from '../../axios/axios-purchases';

const CheckOut = () => {
    const {currentUser} = useSelector(state => state.user);
    const tab = '\u00A0\u00A0\u00A0';
    const {cartItems, shippingCost} = useSelector(state => state.cart); 
    const dispatch = useDispatch();
    const [formValues, setFormValues] = useState();
    const navigate = useNavigate();
    

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
          streetAddress: "",
          city:"",
          state:"",
          phoneNumber:"",
        }}
        validationSchema={Yup.object().shape({
          fullname: Yup.string()
            .required("required field"),
          streetAddress: Yup.string()
            .required("required field"),
          city: Yup.string()
            .required("required field"),
          state: Yup.string()
            .required("required field"),
          phoneNumber: Yup.string()
            .required("required field"),
        })}
        onSubmit={async (values, actions) => {
          const purchaseData = {
            items: cartItems,
            subTotal,
            shippingCost,
            total: subTotal + shippingCost,
            shippingDetails: {
              ...values
            }
          };

          try{
            await createPurchase(purchaseData, dispatch, currentUser);
            navigate("/PurchaseMade");
            dispatch(clearCart());
            setFormValues(values);
          } catch (error) {
            console.log(error);
            alert("Error creating purchase")
          }

          

          const timeOut = setTimeout(() => {
            actions.setSubmitting(false);

            clearTimeout(timeOut);
          }, 1000);
        }}
      >
        {({ errors, touched, handleSubmit, isSubmitting, isValid}) => {
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
                <Label htmlFor="streetAddress">
                  Street Address
                  <Input
                    type="text"
                    name="streetAddress"
                    autoComplete="streetAddress"
                    placeholder="#440-Josua st."
                    valid={touched.streetAddress && !errors.streetAddress}
                    error={touched.streetAddress && errors.streetAddress}
                  />
                </Label>
                <ErrorMessage name="streetAddress">
                  {(msg) => (
                    <StyledInlineErrorMessage>
                    {msg}
                    </StyledInlineErrorMessage>
                  )}
                </ErrorMessage>
                <Label htmlFor="city">
                  City
                  <Input
                    type="text"
                    name="city"
                    placeholder="San Antonio"
                    valid={touched.city && !errors.city}
                    error={touched.city && errors.city}
                  />
                </Label>
                {errors.city && touched.city && (
                  <StyledInlineErrorMessage>
                    {errors.city}
                  </StyledInlineErrorMessage>
                )}
                <Label htmlFor="state">
                  State
                  <Input
                    type="text"
                    name="state"
                    placeholder="Texas"
                    valid={touched.state && !errors.state}
                    error={touched.state && errors.state}
                  />
                </Label>
                {errors.state && touched.state && (
                  <StyledInlineErrorMessage>
                    {errors.state}
                  </StyledInlineErrorMessage>
                )}
                <Label htmlFor="phoneNumber">
                  Phone Number
                  <Input
                    type="text"
                    name="phoneNumber"
                    placeholder="469.337.2872"
                    valid={touched.phoneNumber && !errors.phoneNumber}
                    error={touched.phoneNumber && errors.phoneNumber}
                  />
                </Label>
                {errors.phoneNumber && touched.phoneNumber && (
                  <StyledInlineErrorMessage>
                    {errors.phoneNumber}
                  </StyledInlineErrorMessage>
                )}
                <Submit type="submit" onSubmit={handleSubmit} disabled={!isValid || isSubmitting}>
                  {isSubmitting ? `Submiting...` : `Payment Details`}
                </Submit>
              </Form>
             </FormWrapper>
              
             <hr/>
              
            </>
          );
        }}
      </Formik>
      <div className='payMethods'>
            <div className='divCard'>
              <img className= "payimage" style={{ height: "70px"}}
              src={paymentsmethods} 
              alt='payment Methods'/>
            </div>
          </div>
        </div>
        
        <div className='selectCart'>
        <div className='titlePage'>
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
                            return <CartItemDisplay {...item} key={item.id}/>         
                        })
                    ) : (
                        <p>Cart is empty</p>
                    )
               }
                </div>
                
           </div>
           <div className="shopTotal">
                    <p className="Shipp">Sub-Total:.......$ <b>{(subTotal + 0.00).toFixed(2)}</b></p>
                    <p className="Shipp">shipping Cost:.${tab}<b>{(shippingCost + 0.00).toFixed(2)}</b></p>
                    <p className="Shipp">Total:...............$ <b>{(subTotal + shippingCost).toFixed(2)}</b></p>      
                </div>
          </div>
        </div>
      </div>
    </CheckOutWrapper>
  )
}

export default CheckOut