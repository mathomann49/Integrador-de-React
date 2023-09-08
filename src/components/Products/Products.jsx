import React, { useEffect, useState } from 'react'
import {  ProductsWrapper, StyledButton, CategoriesContainer, 
  ProductsContainer, CardProducts } from './ProductsStyles';
import axios from "axios";
import { getProducts } from '../../redux/products/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link  } from "react-router-dom";
import { adjustedPrice } from '../../Utils/Utils';
import Loader from "../../Pages/ProductsP/Loader";


const Products = () => {
  const products = useSelector((state) => state.products.products);

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [componentMounted, setComponentMounted] = useState(true);

  const dispatch = useDispatch();

    //  useEffect(() => {
    //   const fetchProducts = async () => {
    //      setLoading(true);
    //      const response = await axios.get("https://fakestoreapi.com/products")
    //     dispatch(getProducts(response.data));
    //     if (componentMounted) {
    //               setData(response.data)
    //               setFilter(response.data);
    //               setLoading(false);
    //               console.log("useEffect", fetchProducts);
    //           }  
    //             return () => {
    //               setComponentMounted(false);
    //             };
    //   }; 
    // //  .catch (error) { alert("Try again in a few minutes" )}
      
    //      fetchProducts();
    //      }, [] );
     useEffect(() => {
      const fetchProducts = async () => {
        try {
           setLoading(true);
         const response = await axios.get("https://fakestoreapi.com/products")
        dispatch(getProducts(response.data));
        if (componentMounted) {
                  setData(response.data)
                  setFilter(response.data);
                  setLoading(false);
                  // console.log("useEffect", fetchProducts);
              }  
                return () => {
                  setComponentMounted(false);
                };
        } catch (error) {
          alert("Try again in a few minutes" )
        }
        
      }; 
    
      
         fetchProducts();
         }, [setData, componentMounted, dispatch] );

         const Loading = () =>{
          return (
            <><Loader /></>
          );
         };

         const filterProduct = (category) => {
          const updateList = data.filter((item) => item.category === category);
          setFilter(updateList);
         }

         const ShowProducts = () => {
          const offers = [products[3], products[8], products[13], products[17]];

          return (
            <>
               <CategoriesContainer >
          <StyledButton variant="outline" onClick={() =>setFilter(data)}>All</StyledButton>
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
              <>
                <CardProducts key={product.id}>
                   <img src={image} alt={title}/>
                   <div className='cardBody'>
                     <h5>{title.substring(0, 12)}...</h5>
                     <h6><b>Category:</b> {category}</h6>
                     <p>$ {adjustedPrice(price)}</p>
                     <button><Link to={`/Products/${id}`}>see more</Link></button>
                   </div>
                 </CardProducts>
              </>         
           );
           })}
           </ProductsContainer>
            </>
          );
         };
         return (
                 <ProductsWrapper>
                    <h1>Our products</h1>
                    
                    {loading ? <Loading /> : <ShowProducts />  }
                  </ProductsWrapper>
            )      
           }
         

//   const [loading, setLoading] = useState(false);
//   const [filter, setFilter] = useState(products);
  
//   const dispatch = useDispatch();

//   const fetchProducts = async () => {
//       setLoading(true);
//       const response = await axios.get("https://fakestoreapi.com/products")
      
//       .catch(() => { alert("Try again in a few minutes" );});
//     dispatch(getProducts(response.data));
//     };

//   useEffect(() => {
//     fetchProducts();
//     setLoading(false);
//     setFilter(products);
//     console.log("useEffect", fetchProducts);
//   }, [] );
  
 
  
//   const offers = [products[3], products[8], products[13], products[17]];

//   const filterProduct = (category) => {
//     const updatedList = products.filter((item) => item.category === category);
//     setFilter(updatedList);
//     // console.log(updatedList);
//   }

//   const ShowProducts = () => {
//   return (
//     <>
//         <CategoriesContainer >
//           <StyledButton variant="outline" onClick={() =>setFilter(products)}>All</StyledButton>
//           <StyledButton variant="outline" onClick={() =>filterProduct("men's clothing")}>Men`s clothing</StyledButton>
//           <StyledButton variant="outline" onClick={() =>filterProduct("women's clothing")}>Women`s clothing</StyledButton>
//           <StyledButton variant="outline" onClick={() =>filterProduct("electronics")}>Electronics</StyledButton>
//           <StyledButton variant="outline" onClick={() =>filterProduct("jewelery")}>Jewelery</StyledButton>
//           <StyledButton variant="outline" onClick={() =>setFilter(offers)}>weekly offers</StyledButton>
//         </CategoriesContainer>
        
//         <ProductsContainer>
//         {filter.map((product) => {
//           const {id, title, image, price, category} = product;
         
//           return (
           
//                 <CardProducts key={id}>
//                  <Link to={`/Products/${id}`}>
//                   <img src={image} alt={title}/>
//                   <div className='cardBody'>
//                     <h5>{title.substring(0, 12)}...</h5>
//                     <h6><b>Category:</b> {category}</h6>
//                     <p>$ {adjustedPrice(price)}</p>
//                     <button>see more</button>
//                   </div>
//                  </Link> 
//                 </CardProducts>
//           )})}
//           </ProductsContainer>
//           </>
//   )
//   }
//   return (
//         <ProductsWrapper>
//           <h1>Our products</h1>
          
//           {loading ? <Loader /> : <ShowProducts />  }
//         </ProductsWrapper>
//   )      
// }

export default Products
