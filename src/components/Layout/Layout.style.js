import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    --text-secondary: rgb(199,199,199);
    --border-color: #dbdbdb;
    --bg-color: #fafafa;
    --navbar-height: 66px;
    --inter-post-space: 50px;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }
  body {
    background-color: var(--bg-color);
  }
  ul {
    list-style-type: none
  }
`;

export const LayoutWrapper = styled.section`
  /* height: calc(100vh - 66px); */
  /* height: 1500px; */
  margin: 0 auto;
  width: 70%;
  @media (max-width: 1200px) {
    width: 90%;
  }
`;
