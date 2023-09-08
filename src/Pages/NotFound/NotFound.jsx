import React from 'react'
import { NotFoundWrapper } from './NotFoundStyles'; 
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <div className='textContainer'>
        <h1>heeey...! you're not supposed to be here</h1>
        <h2>I better take you <Link to= "/" style= {{color: "white"}}>home</Link></h2>
        <h2>error page: 404 </h2>
      </div>
    </NotFoundWrapper>
   
  )
}

export default NotFound
