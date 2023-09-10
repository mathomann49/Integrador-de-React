import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
     --prim: #ffa0da;
     --second: #ffcd93;
     --terc: #0683db;
     --forte: #07cb7a;
     --fift: #d3f746;     
    }
    html {
        scroll-behavior: smooth;
    }
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background: #FDEDEC;
        font-family: 'Arial Narrow Bold', sans-serif;
        color: gray;
    }
    a{
        text-decoration: none;
        color: blueviolet;
    }
    a:visited {
        color: black;
    }
    li {
    list-style: none;
    }
`