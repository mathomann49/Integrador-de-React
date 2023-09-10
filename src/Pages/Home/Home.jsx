import React from 'react'
import { HomeWrapper}  from "./HomeStyles";
import  Layaut  from "../../components/Layout/Layaut";
import  Hero  from "../../components/Hero/Hero";
import Products from '../../components/Products/Products';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <>
    <HomeWrapper>
      <Layaut>
        <Hero />
        <Products />
      </Layaut>
      <Footer />
    </HomeWrapper>
    </>  
  )
}

export default Home
