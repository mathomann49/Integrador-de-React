import React from 'react'
import { FooterWrapperStyled  } from "./FooterStyles";
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn} from "react-icons/fa";

const Footer = () => {
  return ( 
    <FooterWrapperStyled>
    <div className='sbFooterSectionPadding'>
        <div className='sbFooterLinks'>
            <div className='sbFooterLinksdiv'>
                <h4>Resources</h4>
                <a href='#'><p>Resorce center</p></a>
                <a href='#'><p>Tetimonials</p></a>
                <a href='#'><p>FAQ</p></a>
            </div>
            <div className='sbFooterLinksdiv'>
                <h4>For Business</h4>
                <a href='#'><p>Employer</p></a>
                <a href='#'><p>Franchise</p></a>
                <a href='#'><p>Locations</p></a>
            </div>
            <div className='sbFooterLinksdiv'>
                <h4>Partners</h4>
                <a href='#'><p>Swing Tech</p></a>
            </div>
            <div className='sbFooterLinksdiv'>
                <h4>Company</h4>
                <a href='#'><p>About</p></a>
                <a href='#'><p>Press</p></a>
                <a href='#'><p>Career</p></a>
                <a href='#'><p>Contact</p></a>
            </div>
            <div className='sbFooterLinksdiv'>
                <h4>Coming soon on</h4>
                <div className='socialMedia'>
                    <a href='#'><p><FaFacebookF /></p></a>
                    <a href='#'><p><FaInstagram /></p></a>
                    <a href='#'><p><FaTwitter /></p></a>
                    <a href='#'><p><FaLinkedinIn /></p></a>  
                </div>
            </div> 
        </div>
        <hr style={{background: "#0683db", width: "100%", height: "1px"}}/>
    <div className='sbFooterBelow'>
        <div className='sbFooterCopyright'>
            <p>2023 - MT all right reserved.</p>
        </div>
        <div className='sbFooterBelowLinks'>
            <a href='#'><div><p>Terms & Conditions</p></div></a>
            <a href='#'><div><p>Privacy</p></div></a>
            <a href='#'><div><p>Segurity</p></div></a>
            <a href='#'><div><p>Cookie Declaration</p></div></a>
        </div>
    </div>
</div>
    </FooterWrapperStyled>
  )
}

export default Footer