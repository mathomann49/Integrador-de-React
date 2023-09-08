import styled from "styled-components";

export const WrapperDetails = styled.div`
margin: 0;
padding: 0;
display: flex;
// gap: 10px;
align-items: center;
justify-content: center;
flex-wrap: wrap;
max-width: 1300px;
width: 100%;
/* height: 100vh; */
padding-bottom: 30px;

.container {
    margin-top: 100px;
    // padding: 10px;
    /* width: 70%; */
    /* width: 1000px; */
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
    /* width: 18%; */
    width: 65px;
    background-color: grey;
    color: white;
}

p {
    /* max-height: 210px; */
    /* max-height: 250px;    */
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
    /* height: unset; */
    /* padding-bottom: 30px; */
    .container {
        flex-direction: column;
        /* width: 500px; */
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
        /* padding: 0 50px; */
        /* justify-content: center; */
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
    /* padding-right: 7px; */
}

    p {
    /* max-height: 210px; */
    /* max-height: 290px;    */
}
    /* height: unset;
    padding-bottom: 30px; */
    
    .picture {
        width: 95%;
        height: 95%;
    }
    .infoContainer {
        /* margin-bottom: 20px;
        gap: 10px; */
    }
    
}
`