import React, { useState } from 'react'
import { CardSection, Container, Wrap, Dropdown } from "./PurchasesStyle"
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import  Loader  from "../ProductsP/Loader";
import { formatDate } from '../../axios/axios-purchases';
import { adjustedPrice } from '../../Utils/Utils';

const CardPurchase = () => {
  const [clicked, setClicked] = useState(false);
  const {purchases, loading, error} = useSelector(state => state.purchases);
  // console.log(purchases);
  if (loading && !purchases) {
    return <Loader />
  };
  if (error) {
    return <h2 style={{textAlign: 'center'}}>{error}</h2>
  };
  

  const toggle = i => {
    if (clicked === i) {
      return setClicked(null);
    }
    setClicked(i);
  };

  return (
    <>
    <IconContext.Provider value={{ color: '#33AFFF', size: '25px' }}>
        <CardSection>
          
          
          {
            purchases?.length ? (purchases.map((purchase, i) => {
              
            return (
              <Container {...purchase} key={purchase._id}>
              <>
                <Wrap onClick={() => toggle(i)} key={purchase._id}>
                  <p>#: {purchase._id.slice(0,5)}</p>
                  <p>{formatDate(purchase.createdAt)}hs.</p>
                  <span>{clicked === i ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === i ? (<Dropdown>
                {
                  purchase?.items.map((item) => {
                    return (
                    <>
                      <div className='resume' {...item} key={item._id}>
                      <span className='quantity'>{item.quantity}</span>
                      <p>{item.title.substring(0, 20)}...</p>
                      <span className='cost'>$ {adjustedPrice(item.price)}</span>
                    </div>
                    </>
                  )
                  })
                }
                    
                    <div className='bill'>
                      <span>S.total:...... $ {purchase.subTotal} </span>
                      <p>Shipping Cost:. $ {purchase.shippingCost}.00</p>
                      <span>Total:.........$ {purchase.total}</span>
                    </div>
                  </Dropdown>) : null}
                  </>
                  </Container>
                  );
          })) : (<h2>You have not made a purchase yet</h2>)
          }
          
          
        </CardSection>
    </IconContext.Provider>
    </>
  )
}

export default CardPurchase