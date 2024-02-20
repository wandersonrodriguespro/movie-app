import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    scroll-behavior: smooth;
    text-decoration: none;
}
`;

export const LimitContainer = styled.div`
  max-width: 1920px;
  margin: auto;
`;


