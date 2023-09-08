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
                <span>Resorce center</span>
                <span>Tetimonials</span>
                <span>FAQ</span>
            </div>
            <div className='sbFooterLinksdiv'>
                <h4>For Business</h4>
                <span>Employer</span>
                <span>Franchise</span>
                <span>Locations</span>
            </div>
            <div className='sbFooterLinksdiv'>
                <h4>Partners</h4>
                <span>Swing Tech</span>
            </div>
            <div className='sbFooterLinksdiv'>
                <h4>Company</h4>
                <span>About</span>
                <span>Press</span>
                <span>Career</span>
                <span>Contact</span>
            </div>
            <div className='sbFooterLinksdiv'>
                <h4>Coming soon on</h4>
                <div className='socialMedia'>
                <span><FaFacebookF /></span>
                <span><FaInstagram /></span>
                <span><FaTwitter /></span>
                <span><FaLinkedinIn /></span>  
                </div>
            </div> 
        </div>
        <hr style={{background: "#0683db", width: "100%", height: "1px"}}/>
    <div className='sbFooterBelow'>
        <div className='sbFooterCopyright'>
            <p>2023 - MT all right reserved.</p>
        </div>
        <div className='sbFooterBelowLinks'>
            <span>Terms & Conditions</span>
            <span>Privacy</span>
            <span>Segurity</span>
            <span>Cookie Declaration</span>
        </div>
    </div>
</div>
    </FooterWrapperStyled>
  )
}

export default Footer