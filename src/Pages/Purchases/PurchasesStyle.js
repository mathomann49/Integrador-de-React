import styled from "styled-components";

export const PurchasesContainer = styled.div`
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

  .cardsPurchasesContainer {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

  }    
}
`
// cardPurchase

export const CardSection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -100px;
  height: 100vh;
  border-radius: 10px;
`
export const Container = styled.div`
  padding-top: 20px;
  top: 30%;
`

export const Wrap = styled.div`
  background: #3f475d;
  color: lightblue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 300px;
  width: 90%;
  text-align: center;
  cursor: pointer;
  border-radius: 10px 10px 0 0;

  p {
    padding: 7px;
    font-size: 15px;
    font-weight: 400
  }

  span {
    margin-right: 9px;
    color: #33AFFF ;
  }
`

export const Dropdown = styled.div`
  background: #1c1c1c;
  color: #33AFFF ;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 10px 10px;
  
  .resume,
  .bill {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .bill {
    flex-direction: column;
    padding-bottom: 14px;
  } 
  .resume {
    gap: 20px;
    padding-top: 9px;
    width: 100%
  }
  .resume p,
  .bill p {
    margin: 0;
  }
  
  .quantity,
  .bill {
    padding-left: 10px;
    
  }
  .cost {
    padding-right: 10px;
  }
  p {
    font-size: 15px;
  }
`
