import styled from "styled-components";

export const LoaderWrapper = styled.div`
display: grid;
justify-content: center;
align-items: center;
height: 350px;
.loading-spinner {
   width: 50px;
   height: 50px;
   border: 10px solid #EBDEF0; 
   border-top: 10px solid blueviolet; 
   border-radius: 50%;
   animation: spinner 1.2s linear infinite;
   }
   @keyframes spinner {
   0% {
       transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);

         }
   }
`

