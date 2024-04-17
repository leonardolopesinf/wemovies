import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html{
    font-family: 'Open Sans', sans-serif;
    font-size: 62.5%;
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.backgrounds.dark};
  }
`;

export default GlobalStyle;
