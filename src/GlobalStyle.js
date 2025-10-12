import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
margin: 0;
font-family: Arial, Helvetica, sans-serif;
background-color: #1c1160ff;
}

*{
box-sizing: border-box;
}

ul{
list-style: none;
padding: 0;
margin: 0;
}

a{
text-decoration: none;}
`