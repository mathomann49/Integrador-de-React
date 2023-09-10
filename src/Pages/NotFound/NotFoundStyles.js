import styled from "styled-components";

export const NotFoundWrapper = styled.div`
padding-top: 80px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
height: auto;

.textContainer,
.bg {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 300px;
    border-radius: 7px;
}

.textContainer {
    padding-top: 0;
}

h4,
h3,
h5 {
    color: black;
}

`