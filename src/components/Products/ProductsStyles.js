import styled from "styled-components";

export const ProductsWrapper = styled.div`
padding: 50px 0;
display: flex;
flex-direction: column;
width: 100%;
max-width: 1300px;
margin: 0 15px;
justify-content: center;
align-items: center;
gap: 20px;

h1 {
    background-color: grey;
    margin: auto;
    color: lightblue;
    padding: 7px 12px;
    border-radius: 30px;
    width: fit-content;
    align-self: center;
}
`
export const CategoriesContainer = styled.div`
width: 80%;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
gap: 20px;
`

export const ProductsContainer = styled.div`
display: grid;
place-content: center;
justify-content: center;
grid-template-columns: repeat(auto-fit, 220px);
row-gap: 1.5rem;
width: 100%;
max-width: 1300px;

`
export const CardProducts = styled.div`
width: 200px;
border: 1px solid grey;
border-radius: 0 0 10px 10px;
img {
    width: 100%;
    height: 260px;
    
}
.cardBody {
    display: flex;
    flex-direction: column;
    padding: 0 10px 10px 10px;
    justify-content: flex-start;
    color: #212F3D;
}

h5 {
    font-weight: 600;
    font-size: 18px;
}
h6 {
    
    font-size: 13px;
}

p {
    font-weight: bold;
    font-size: 18px;
}

button {
    width: 90%;
    font-weight: bold;
    background: #0683db;
    border-radius: 3px;
    padding: 10px 0;
    cursor: pointer;
    
}
button:hover {
    background-color: wheat;
    border: 2px #0683db solid;
    transition: background-color 0.5s ease-in;
}
`


export const StyledButton = styled.button`
    background-color: ${(props) => (props.isPink ? "pink" : "#3c7f8b")};
    border: 2px solid ${(props) => (props.isPink ? "pink" : "#3c7f8b")};
    border-radius: 5px;
    color: ${(props) => (props.isPink ? "black" : "white")};
    padding: 10px;
    cursor: pointer;

    &:focus {
    box-shadow: 0 0 10px 2px pink;
    outline: 2px #0255a530;
    background: pink;
    color: black;
}
` 
export const ButtonsContainer = styled.div`
display: flex;
justify-content: center;
gap: 20px;
margin-top: 3rem;
`    