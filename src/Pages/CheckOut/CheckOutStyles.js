import styled from "styled-components";
// import FilteredPropsInputField from "../SignUp/FilteredPropsInputField";

export const CheckOutWrapper = styled.div`
display: flex;
padding-top: 100px;
justify-content: center;
flex-direction: column;
align-items: center;
width: 1300px;
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

.container {
    /* margin-top: 115px; */
    /* padding: 20px; */
    width: 70%;
    display: flex;
    border: 2px solid black;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
}  
.divForm,
.selectCart {
    
    width: 50%;
}
.selectCart {
    display: flex;
    flex-direction: column;
}
.selecteCart h1 {
    background-color: grey;
    margin: auto;
    color: lightblue;
    padding: 7px 12px;
    border-radius: 30px;
    width: fit-content;
    align-self: center;
}
.payMethods {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 200px;
}  
.divCard h3 {
    padding: 0;
}
.divCard {
    display: flex;
    align-items: center;
    width: 100%;
    border: 1px solid black;
}
.payimage {
     padding-top: 50px;
     transform: scale(1, 1);
     transition: 1s;

   & :hover {
     transform: scale(1.5, 1.5);
  } 
}



.container {
    margin-top: 5px;
    padding: 10px;
    width: 80%;
    display: flex;
    border: 2px solid black;
    justify-content: space-around;
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
.cartContainer {
    margin-top: 10px;
    display: flex;
    width: 95%;
    height: 280px;
    flex-direction: column;
    overflow: scroll;
    &::-webkit-scrollbar {
        background: transparent;
    }
    &::-webkit-scrollbar :horizontal {
        display: none;

}
}


`
export const CartItemContainer = styled.div`
display: flex;
// height: 500px;
// overflow: auto;
width: 95%;
align-items: center;
justify-content: center;
z-index: 20;
border: solid 1px black;
border-radius: 5px;
/* overflow: scroll;
    &::-webkit-scrollbar {
        background: transparent;
    }
    &::-webkit-scrollbar :horizontal {
        display: none;
    } */
.CartItem,
    .itemData {
        display: flex;
        width:95%;
    }
    .CartItem img {
        padding: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 130px;
        width: 100px;
    }
    .itemData {
        flex-direction: column;
        padding: 5px 0;
    }
    .itemData p,
    .itemData span {
        color: black;
        font-size: 15px;
    }
    .itemQuantifier {
        display: flex;
        color: black;
        font-size: 15px;
        gap: 5px;
    }
    .increase,
    .decrease,
    .itemUnits {
        padding: 8px;
        background: white;
        color: black;
        border-radius: 3px;
        border: grey solid 1px;
        cursor: pointer;
    }
    .itemUnits {
        padding: 5px 9px;
        font-weight: bold;
    }
`