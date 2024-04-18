import { createGlobalStyle } from "styled-components";
import { md } from "./breakpoints";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html{
    height: 100%;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.backgrounds.dark};
  }

  body {
    height: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
    height: 100%;

    padding: 0 12.5% 40px 12.5%;

    @media(${md}){
      padding: 0 0 40px 0;
    }
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  a{
    color: inherit;
    text-decoration: none;
  }

  ul{
    list-style-type: none;
  }
`;

export default GlobalStyle;
