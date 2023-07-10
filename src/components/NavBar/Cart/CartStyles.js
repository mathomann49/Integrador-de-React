import styled from "styled-components";

export const CartWrapper = styled.div`
position: fixed;
top: 85px;
left: 0;
/* right: 128px;  */
display: flex;
width: 100vw;
height: calc(100vh - 85px);
background-color: #111111bd;
opacity: 0,4;
transition: opacity 0.4s;
z-index: 2;
/* align-items: center;
justify-content: center;
flex-direction: column; */
.cartContainer {
    position: fixed;
    top: 85px;
    right: 0;
    width: 310px;
    border-radius: 0 0 0 12px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    padding-bottom: 100px;
    align-items: center;
    height: calc(100vh - 85px);
    // overflow: auto;
    justify-content: center;
    background: #EBDEF0;
    transition: all 0.5s ease-out;
}
.cartItemsContainer {
    display: flex;
    flex-direction: column;
    width: 95%;
    // height: 300px;
    overflow: scroll;
    &::-webkit-scrollbar {
        background: transparent;
    }
    &::-webkit-scrollbar :horizontal {
        display: none;
    }
}
    .shopTotal {
    display: flex;
    width: 90%; 
    align-items: flex-start;
    flex-direction: column;
    padding: 0;
}

    .shopTotalData {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        height: 20px;
        padding-bottom: 20px;
    }
    .shipp {
        padding: 5px;
        margin: 5px;
    }


.buttonsContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}
.buttonsContainer button {
    border-radius: 3px;
    cursor: pointer;
}
.btnAdd {
    background: #42A5F5;
}
.btnKeep {
    background: greenyellow;
}
.btnRemove {
    background: magenta;
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
gap: 10px;
       
    
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
    


 