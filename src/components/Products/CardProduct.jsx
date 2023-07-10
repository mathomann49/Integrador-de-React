import React from 'react';
import { CardProducts, StyledButton } from './ProductsStyles';
import { useSelector } from 'react-redux';
import { Link  } from "react-router-dom";

const CardProduct = () => {
  const products = useSelector((state) => state.products.products);
  // console.log(products);
  const renderList = products.map((product) => {
    const {id, title, image, price, category} = product;
    return (
    <CardProducts key={id}>
      <Link to={`/Products/${id}`}>
        <img src={image} alt={title}/>
        <div className='cardBody'>
            <h5>{title}</h5>
            <h6><b>Category:</b> {category}</h6>
            <p>S{price}</p>
            {/* <StyledButton>see more</StyledButton> */}
        </div>
      </Link>
        
    </CardProducts>
  );
  });
  return <>{renderList}</>;
  
};

export default CardProduct
