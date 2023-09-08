import styled from "styled-components";
import SmilingPeople from "../../Smiling-people.png"

export const  HeroSectionStyled = styled.section`
display: flex;
background-color: #EBDEF0;
width: 100%;
margin: 0;
padding: 0;
/* max-width: 1300px; */
height: calc(100vh + 55px);
justify-content: center;
align-items: center;
/* width: 1300px; */
/* margin: 0 auto; */
flex-wrap: wrap;
/* padding: 40px; */
gap: 10px;
.container{
    display: flex;
    width: 90%;
    max-height: 90%;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
/* @media (max-width: 1000px) {
    flex-direction: column;
} */
`
export const HeroTexContainertStyled = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
width: 40%;
font-size: 1.5rem;
/* color: black; */
color: #42A5F5;
padding-right: 50px;
padding-bottom: 200px; 
p {
    text-align: justify;
    font-size: 1.3rem;
}
@media (max-width: 1000px) {
    width: 80%;
    height: 60vh;
    background-image: url(${SmilingPeople});
    background-size: auto;
    /* background-repeat: no-repeat;  */
    /* opacity: 0.4; */
    justify-content: center;
    align-items: center;
    gap: 0;

    h2 {
        margin-top: 200px;
    }

    p,h2 {
        padding: 20px;
        border-radius: 7px; 
        justify-self: center;
        align-self: center;
        width: 70%;
        color: black;
        background:  rgba(204, 204, 204, 0.7);
    }
    @media (max-width: 700px) {
        h2 {
            font-size: 30px;
        }
}  
    @media (max-width: 546px) {
        h2 {
            font-size: 26px;
        }
        p {
            font-size: 17px;
        }
}  
    @media (max-width: 473px) {
        h2 {
            font-size: 23px;
        }
        p {
            font-size: 15px;
        }
}  
    @media (max-width: 419px) {
        h2 {
            font-size: 20px;
            width: 90%;
            margin-left: 30px;
        }
        p {
            font-size: 14px;
            width: 90%;
            margin-left: 30px;
        }
}  
    @media (max-width: 33px) {
        h2 {
            font-size: 14px;
        }
        p {
            font-size: 13px;
        }
}  
}
`
export const HeroImageContainerStyled = styled.div`
width: 35%;
img {
    width: 100%;
    padding: 70px 20px;
}
@media (max-width: 1000px) {
    width: 100%;
    display: none;
}
`

