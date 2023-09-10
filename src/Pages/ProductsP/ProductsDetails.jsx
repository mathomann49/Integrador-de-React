import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import  { WrapperDetails }  from "./ProductsDetailsStayle";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/CartSlice";
import { adjustedPrice } from '../../Utils/Utils';
import Loader from './Loader';
import axios from 'axios';

const ProductsDetails = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  let {id} = useParams();
  // console.log("id", id);
  const getDetails = async () => {
    try {
    setLoading(true);
    const result = await axios.get(`https://fakestoreapi.com/products/${id}`);
    const data = await result.data;
    // console.log(data);
    setData(data);
    setLoading(false)}
    catch (err) {
      alert( "Try again in a few minutes" );
  };
}

  useEffect(() => {
    getDetails();
    console.log("useEffect");
  }, [])

  
const dispatch = useDispatch()
const {image, title, category, description, price} = data;
const ViewProductDesc = (
  <div className='container'>
        <div className='imageContainer'>
          <img className='picture' src={image} alt={title}/>
        </div>
        <div className='infoContainer'>
          <h2 className='title'>{title}</h2>
          
          <div className='middle'>
            <p className='cost'>$ {adjustedPrice(price)}</p>
            <p className='classif'><b>Category: </b>{category}</p>
          </div>
          
          <p className='desc'><b>Description: </b>{description}</p> 
          <div className='controls'>
            <button onClick={() => dispatch(addToCart({image, title, price, category, id}))} className='btnAd' >add to cart</button>
            <button onClick={() => { navigate("/Products")} }>back</button>
          </div>
        </div>
      </div>
);
  return (
    
    <WrapperDetails>
      {loading ? <Loader /> : ViewProductDesc }
    </WrapperDetails>
    
  )

  }
export default ProductsDetails