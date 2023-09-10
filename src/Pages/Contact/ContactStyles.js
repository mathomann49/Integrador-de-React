import styled from "styled-components";

export const ContactContainer = styled.div`
padding-top: 110px;
display: flex;
margin: auto;
flex-direction: column;
gap: 20px;

h1 {
    padding-top: 110px;
    padding: 12px 10px 12px 10px;
    background-color: grey;
    margin: auto;
    color: lightblue;
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
    
}
.header {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 750px;
    gap: 30px;
    align-self: center;
    justify-self: center;
    
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

@media (max-width: 1000px) {
    padding-right: 100px;
}
@media (max-width: 830px) {

    .header {
        flex-direction: column;
        width: 90%;
        align-items: center;
        justify-items: center;
        padding-bottom: 30px;
    }

    .view,
    .view p
    .header form {
        width: 90%;  
    }
    .view p {
        width: 100%;
        
    }
    .view ul {
        margin: auto;
        width: 200px;
       
    }
}

@media (max-width: 640px) {
    padding-right: 0;
    padding-left: 0;
    .header {
        width: 90%;
    }
    .header form,
    .pform label,
    .pform input,
    .header form textarea,
    button {
        width: 90%;
    } 

    .header form textarea {
        width: 88%;
    } 

    .view p {
        width: 90%;
        
    }
}

`