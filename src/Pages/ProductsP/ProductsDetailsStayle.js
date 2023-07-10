import styled from "styled-components";

export const WrapperDetails = styled.div`
margin: 0;
padding: 0;
display: flex;
gap: 1.25rem;
align-items: center;
justify-content: center;
flex-wrap: wrap;
max-width: 1300px;
height: 100vh;

.container {
    margin-top: 115px;
    padding: 20px;
    width: 70%;
    display: flex;
    border: 2px solid black;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
}
.imageContainer,
.infoContainer {
    width: 50%;
}
.picture {
    width: 350px;
    height: 400px;
}
.cost {
    padding: 5px 10px;
    border: solid 1px black;
    border-radius: 3px;
    font-weight: bold;
    width: 15%;
    background-color: grey;
    color: white;
}

.controls {
    display: flex;
    flex-direction: row;
    width: 100%;
}

button {
    width: 45%;
    font-weight: bold;
    background: #0683db;
    border-radius: 3px;
    padding: 10px 0;
    cursor: pointer;
    margin: 20px;  
}
.btnAd {
    background: crimson;
}     
button:hover {
    background-color: wheat;
    border: 2px #0683db solid;
    transition: background-color 0.5s ease-in;
}
`