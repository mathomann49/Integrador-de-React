import React from 'react'
import { HeroSectionStyled, HeroTexContainertStyled, HeroImageContainerStyled } from './HeroStyles'
import SmilingPeople from "../../Smiling-people.png"

const Hero = () => {
  return (
    <HeroSectionStyled>
        
        <div className='container'>
          <HeroTexContainertStyled>
          <h2>Be another satisfied customer!</h2>
        <p>Live the experience of buying in our store, you will surely 
             find what you are looking for and at the best price. Take a 
             look at our varied <b>"weekly offers"</b>. We are waiting for it. Go!</p>
        </HeroTexContainertStyled>
        <HeroImageContainerStyled>
            <img src= {SmilingPeople} alt='smiling people'/>
        </HeroImageContainerStyled>
        </div>
        
    </HeroSectionStyled>
  )
}

export default Hero