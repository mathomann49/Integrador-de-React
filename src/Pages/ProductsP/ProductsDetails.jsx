import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import  { WrapperDetails }  from "./ProductsDetailsStayle";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/CartSlice";

const ProductsDetails = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  let {id} = useParams();
  // console.log("id", id);
  const getDetails = async () => {
    const result = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await result.json();
    console.log(data);
    setData(data);
  };
  

  useEffect(() => {
    getDetails();
  }, [])
  
const dispatch = useDispatch()

const {image, title, category, price} = data;
  return (
    
    <WrapperDetails>
      <div className='container'>
        <div className='imageContainer'>
          <img className='picture' src={data.image} alt={data.title}/>
        </div>
        <div className='infoContainer'>
          <h2 className='title'>{data.title}</h2>
          <p className='cost'>${data.price}</p>
          <h3 className='classif'><b>Category: </b>{data.category}</h3>
          <p className='desc'><b>Description: </b>{data.description}</p>
          <div className='controls'>
            <button onClick={() => dispatch(addToCart({image, title, price, category, id}))} className='btnAd' >add to cart</button>
            <button onClick={() => { navigate("/Products")} }>back</button>
          </div>
          
        </div>
      </div>
    </WrapperDetails>
    
  )

  }
export default ProductsDetails