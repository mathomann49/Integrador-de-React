import React from 'react'
import { ContactContainer } from './ContactStyles'
import { FaRegEnvelope, FaRegMap, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <ContactContainer>
      <div>
        <h1>Contact <span className='outstanding'>Us</span></h1>
        {/* <hr></hr> */}
      </div>
      
      <div className='header'>
      <div className='view'>
        <p>If you have any questions regarding our services, please fill out the 
	          form with a brief description of any and all pertinent information. We 
	          will respond to you within 24 hours. If you need immediate assistance, 
	          you may contact us using our information below.</p>
        <ul>
          <li><b><span><FaRegMap /></span> Main Office:</b></li>
          <li>123 Lucas Street</li>
          <li>Building C</li>
          <li>Waxahachie, Texas. 75165</li>
          <li><span><FaRegEnvelope /></span> <b>Email:</b></li>
          <li>ops@octopus.com</li>
          <li><b><span><FaPhoneAlt /></span> Phone:</b></li>
          <li>469.337.2872</li>
        </ul>
      </div>
        
        
          <form>
            <p className='pform'>
              <label>Fullname*</label>
              <input type='text' name='Fullname' id='fullname' placeholder=' John Smith'/>
            </p>
            <p className='pform'>
              <label>email*</label>
              <input type='email' name='email' id='email' placeholder=' johnsmith@ok.com'/>
            </p>
            <p className='pform'>
              <label>Phone*</label>
              <input type='tel' name='Phone' id='phone' placeholder=' 469.345.6748'/>
            </p>
            <p className='pform'>
              <label>Additional Info*</label>
              <textarea name='additionalInfo' rows={5}></textarea> 
            </p>
            <button type='submit'>SEND</button>
          </form>
        </div>
      
    </ContactContainer>
  )
}

export default Contact
