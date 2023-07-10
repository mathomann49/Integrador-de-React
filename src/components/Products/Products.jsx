import React, { useEffect, useState } from 'react'
import { ButtonsContainer, ProductsWrapper, StyledButton, CategoriesContainer, ProductsContainer, CardProducts } from './ProductsStyles'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import axios from "axios";
import { getProducts } from '../../redux/products/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link  } from "react-router-dom";


const Products = () => {
  const products = useSelector((state) => state.products.products);
  // const [filter, setFilter] = useState(products);
  // console.log(products[0]);


  
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
    .get("https://fakestoreapi.com/products")
    // .catch((err) => {console.log("Err", err);
    .catch((err) => alert= "err");
  dispatch(getProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  

  const [filter, setFilter] = useState(products);
  // const [limit, setLimit] = useState(4);
  // const [loading, setLoading] = useState(false);
  const offers = [products[3], products[8], products[13], products[17]];
  const filterProduct = (category) => {
  const updatedList = products.filter((item) => item.category === category);
  setFilter(updatedList);
  console.log(updatedList);
  }
  return (
    <ProductsWrapper>
        <h1>Our products</h1>
        <CategoriesContainer>
          <StyledButton variant="outline" onClick={() =>setFilter(products)}>All</StyledButton>
          <StyledButton variant="outline" onClick={() =>filterProduct("men's clothing")}>Men`s clothing</StyledButton>
          <StyledButton variant="outline" onClick={() =>filterProduct("women's clothing")}>Women`s clothing</StyledButton>
          <StyledButton variant="outline" onClick={() =>filterProduct("electronics")}>Electronics</StyledButton>
          <StyledButton variant="outline" onClick={() =>filterProduct("jewelery")}>Jewelery</StyledButton>
          <StyledButton variant="outline" onClick={() =>setFilter(offers)}>weekly offers</StyledButton>
        </CategoriesContainer>
        <ProductsContainer>
        {filter.map((product) => {
          const {id, title, image, price, category} = product;
          return (
                <CardProducts key={id}>
                 <Link to={`/Products/${id}`}>
                  <img src={image} alt={title}/>
                  <div className='cardBody'>
                    <h5>{title}</h5>
                    <h6><b>Category:</b> {category}</h6>
                    <p>S{price}</p>
                  </div>
                </Link> 
              </CardProducts>
          )})}
          </ProductsContainer>
        
        <ButtonsContainer>
        {/* <StyledButton><FaAngleLeft />   Previus</StyledButton>
        <StyledButton>Next   <FaAngleRight /></StyledButton> */}
        </ButtonsContainer>
    </ProductsWrapper>
  )
}

export default Products
