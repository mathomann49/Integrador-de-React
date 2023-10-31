import styled from "styled-components";

export const PurchaseMadeWrapper = styled.div`
padding-top: 80px;
width: 100vw;
height: calc(100vh - 80px);
background-image: url(https://png.pngtree.com/png-clipart/20211128/original/pngtree-realistic-multicolored-confetti-vector-png-for-the-festival-free-tinsel-falling-png-image_6953848.png);
background-size: cover;
align-items: center;
justify-content: center;
.infoBox {
    padding: 10px;
    margin: 150px auto;
    width: 290px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: blueviolet;
    background:  #ffa0da;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
}

.infoBox p {
    padding: 0 20px;
}
.info {
    display: flex;
    flex-direction: column;
    align-self: center;
    color: blueviolet;
    padding: 0;
}
button {
    width: 90%;
    font-weight: bold;
    background: #0683db;
    border-radius: 3px;
    padding: 10px 0;
    cursor: pointer;    
}
`