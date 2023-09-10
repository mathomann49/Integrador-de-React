import styled from "styled-components";

export const WrapperDetails = styled.div`
/* margin: 0 50px; */
padding: 0;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
max-width: 1100px; 
width: 100%;
padding-bottom: 30px;

.container {
    margin-top: 100px;
    width: 800px;
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

.infoContainer{
    padding-right: 7px;
}

.picture {
    margin: 5px;
    width: 350px;
    height: 400px;
    padding: 5px;
    
}
.title {
    padding-left: 7px;
}

.middle {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-right: 7px;
}

.classif {
    font-size: 20px;
}

.cost {
    padding: 5px 10px;
    border: solid 1px black;
    border-radius: 3px;
    font-weight: bold;
    width: 65px;
    background-color: grey;
    color: white;
}



.controls {
    padding-top: 7px;
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

@media (max-width: 840px) {
    
    .container {
        flex-direction: column;
        
        width: 90%;
    }
    .imageContainer,
    .infoContainer {
        width: 90%;
        
    }

    .imageContainer {
        padding: 0 50px;
    }

    .picture {
        display: flex;
        margin: auto;
        align-self: center;
    }

    .controls {
        margin-top: 10px;
    }
}  

@media (max-width: 442px) {

    .middle {
    flex-direction: column;
    justify-content: flex-start;
    
}

    
    
    .picture {
        width: 95%;
        height: 95%;
    }
    
    
}
`