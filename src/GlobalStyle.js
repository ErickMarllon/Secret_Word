import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding:0;
}


html,body{
  height: 100%;
}

body{
  font-family: Helvetica, sans-serif;
  background: linear-gradient(180deg, rgba(9, 35, 175) 0%, rgba(0, 0, 0, 1) 100%);
  color: #fff;
  /* height: auto !important; */
}

`;
