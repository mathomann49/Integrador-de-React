import React from 'react'
import { HomeWrapper}  from "./HomeStyles";
// import { FooterWrapperStyled  } from "./FooterStyles";
// import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn} from "react-icons/fa";
import  Layaut  from "../../components/Layout/Layaut";
import  Hero  from "../../components/Hero/Hero";
import Categories from "../../components/Categories/Categories";
import Products from '../../components/Products/Products';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <HomeWrapper>
      <Layaut>
        <Hero />
        {/* <Categories /> */}
        <Products />
      </Layaut>
      <Footer />
    </HomeWrapper>
      
  )
}

export default Home
