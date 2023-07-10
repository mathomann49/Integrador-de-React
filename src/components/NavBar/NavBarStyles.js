import styled from "styled-components";

export const NavBarContainerStyled = styled.header`
height: 55px;
width: 100%;
background-color: #EBDEF0;
/* background-color: #07cb7a;  */
/* background-color: #ffcd94;  */
position: fixed;
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem 4rem;
/* padding-right: 5rem; */
.logo h1 {
    color:  blueviolet;
}
.nav-links {
    display: flex;
    justify-content: center;
    gap: 10px;
    font-size: 20px;
    margin-right: 5rem;
    color:  blueviolet;
    /* margin-right: 70px; */
.container {
    /* margin-right: 5rem; */
}        
    } 
    .links {
            color:  blueviolet;
            font-weight: bold;
            padding-top: 30px;
            transition: 0.5s all ease-out;
        &:hover {
            color: white;
            text-decoration: underline;
        }
    }
    
    @media (max-width: 998px) {
        .nav-links {
            display: none;
        }
        .nav-links-mobile {
            position: absolute;
            border-radius: 0 0 10px 0;
            color: blueviolet;
            font-weight: bold;
            display: block;
            left: 0;
            top: 10%;
            transition: all 0.5s ease-in-out;
            width: 180px;
            background-color: #EBDEF0;
        }
    }
`
export const StyledButton = styled.button`
    border: 2px solid #FFF;
    margin: 15px 10px;
    border-radius: 5px;
    background-color: ${(props)=> props.variant === "outline" ? "#FFF" : "#42A5F5"};
    color:  ${(props)=> props.variant === "outline" ? " #42A5F5" : "#FFF"};
    padding: 10px 22px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    transition: 0.5s all ease-out;
    &:hover {
        background-color: ${(props)=> props.variant !== "outline" ? "black" : " #42A5F5"};
    color:  ${(props)=> props.variant !== "outline" ? " #42A5F5" : "black"}; 
    }
    `
    export const CartContainerStyled = styled.div`
    display: flex;
    position: relative;
    height: 60px;
    width: 50px;
    padding-top: 10px;
    
    span {
        position: absolute;
        top: 0;
        right: 0;
        border-radius: 50%;
        background-color: #273746;
        color: white;
        width: 15px;
        height: 15px;
        padding: 5px;
        text-align: center;
    }
    `
    export const MenuContainerStyled = styled.div`
    display: none;
    cursor: pointer;
    margin-right: 70px;
    @media (max-width: 998px) {
        display: flex;
    }
    `
    

