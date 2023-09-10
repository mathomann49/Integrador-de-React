import styled from "styled-components";


export const CheckOutWrapper = styled.div`
display: flex;
padding-top: 100px;
justify-content: center;
flex-direction: column;
align-items: center;
width: 100%;
max-width: 1300px;
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

  
.divForm,
.selectCart {
    justify-content: center;
    align-items: center;
    width: 50%;
}

form {
    align-self: center;
    justify-self: center;
    width: 100%;
    padding-left: 80px;
}
.selectCart {
    display: flex;
    flex-direction: column;
}

.titlePage {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}
.titlePage h1 {
    background-color: grey;
    display: flex;
    justify-self: center;
    color: lightblue;
    margin: 0;
    padding: 7px 12px;
    padding-right: 0;
    border-radius: 30px;
    width: 170px;
    align-self: center;
}

hr {
    width: 70%;
}
.payMethods {
    display: flex;
    margin: auto;
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
    
}
.payimage {
     padding-top: 50px;
     
}



.container {
    margin-top: 5px;
    padding: 10px;
    width: 75%;
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
.cartContainer {
    margin-top: 10px;
    display: flex;
    width: 95%;
    height: 280px;
    flex-direction: column;
    overflow: scroll;
    &::-webkit-scrollbar {
        background: transparent;
        display: none;
    }
    &::-webkit-scrollbar :horizontal {
        display: none;

}

}

@media (max-width: 1000px) {
    .container {
        width: 80%;
    }
}

@media (max-width: 877px) {
    .container {
        flex-direction: column-reverse;
        margin-bottom: 30px;
    }
    .selecteCart,
    .cardProductsCheckOut {
        width: 500px;    
        }
    .cartContainer {
        width: 100%;
    }
    .shopTotal {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }  
    
    form {
        padding-left: 0;
    }

}
@media (max-width: 730px) {
    .selecteCart,
    .cardProductsCheckOut {   
        width: 400px;
    }
    .divForm {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;  
    }      

}

@media (max-width: 650px) {
    .selecteCart,
    .cardProductsCheckOut {   
        width: 300px;
    }
    

    Input,
    Submit {
        width: 250px;
    }
}
@media (max-width: 520px) {
    .titlePage {
        width: 300px;
        height: 51px;
    }
    .titlePage h1 {
        width: 170px;
        max-height: 51px;
       
    }
    
    

    Form {
        align-self: center;
        justify-self: center;
        

    }
    .divForm {
        
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

@media (max-width: 350px) {
        .cardProductsCheckOut {   
            padding-left: 15px;
        }  

        .payMethods {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
        }
        .divForm {
           width: 280px;
    }  
    
    .divCard {
        display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
    }
    .container{
        width: 88%;
    }
}


`

export const FormWrapper = styled.div`
display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 280px;

    @media (max-width: 530px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }    

`

export const CartItemContainer = styled.div`
display: flex;
width: 95%;
align-items: center;
justify-content: center;
z-index: 20;
border: solid 1px black;
border-radius: 5px;

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
export const Submit = styled.button`
  width: 298px;
  margin-top: 1.5rem;
  background-color: rgb(24, 81, 187);
  display: block;
  text-align: center;
  font-size: 1rem;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 700;
  height: 3rem;
  white-space: nowrap;
  color: rgb(232, 243, 255);
  padding: 0.5rem 1rem;
  border-radius: 10px;

  &:active,
  &:focus,
  &:hover {
    cursor: pointer;
    background: #EBDEF0;
    color: black;
  }

  &:disabled {
    cursor: pointer;
    background-color: rgb(163, 168, 173);
    box-shadow: none;
    color: rgb(255, 255, 255);

    &:hover,
    &:focus {
      cursor: not-allowed;
    }
  }

  @media (max-width: 650px){
    width: 268px;
  }
    
`
