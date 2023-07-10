import styled from "styled-components";

export const ContactContainer = styled.div`
padding-top: 110px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 20px;
.outstanding {
    /* background-color: orange;
    color: black;
    padding: 7px;
    border-radius: 3px; */
}
h1 {
    padding-top: 110px;
    padding: 12px 10px 12px 10px;
    background-color: grey;
    margin: auto;
    color: lightblue;
    /* padding: 7px 12px; */
    border-radius: 30px;
    width: fit-content;
    align-self: center;
}
.header form {
    width: 400px;
}
.view p {
    width: 250px;
}
.view, 
.view ul {
    padding-top: 10px;
    @media screen and (max-Width: 760px) {
        align-items: center;
        justify-content: center;
    }
}
.header {
    display: flex;
    justify-content: center;
    max-width: 900px;
    gap: 30px;
    @media screen and (max-Width: 760px) {
        flex-direction: column;
    }
}

.pform {
    width: 100%;
    display: flex;
    flex-direction: column;
}
.pform label {
    font-weight: bold;
}
.pform input::placeholder {
    font-style: italic;
    opacity: 0.7;
    border-radius: 5px;
}
.pform input {
    padding: 5px 0;   
}

button {
    width: 100%;
    font-weight: bold;
    background: #0683db;
    border-radius: 3px;
    padding: 10px 0;
    cursor: pointer;
     
}
button:hover {
    background-color: grey;
    border: 2px #0683db;
    transition: background-color 0.5s ease-in;
}
`