import styled from "styled-components";

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
@media (max-width: 1000px) {
    flex-direction: column;
}
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
`
export const HeroImageContainerStyled = styled.div`
width: 35%;
img {
    width: 100%;
    padding: 70px 20px;
}
`

