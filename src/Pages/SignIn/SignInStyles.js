import styled from "styled-components";

export const SignInWrapper = styled.div`
display: flex;
padding-top: 120px;
justify-content: center;
align-items: center;
flex-direction: column;
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


.pform {
    width: 300px;
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
export const StyledLinkAccount = styled.p`
padding: 5px 0;
`