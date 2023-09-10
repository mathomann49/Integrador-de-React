import React from 'react'
import { NotFoundWrapper } from './NotFoundStyles'; 
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <div className='bg' style={{
        width: `300px`,
        height: `265px`,
        backgroundSize: `cover`,
        backgroundImage: `url(https://cdn.create.vista.com/api/media/small/459920844/stock-vector-uninterested-disinterested-incurious-emoji-expressing)`
      }}>
      </div>
      <div className='textContainer' >
        <h3>heeey...! you're not supposed to be here</h3>
        <h4>I better take you <Link to= "/" style= {{color: "blue", cursor: "pointer"}}>home</Link></h4>
        <h5>error page: 404 </h5>
      </div>
    </NotFoundWrapper>
   
  )
}

export default NotFound
