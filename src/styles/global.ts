import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: #fff;

    h1, h2, h3, h4, h5, h6 {
      font-size: 24px;
    }

    min-height: 100vh;

    background: linear-gradient(150deg, #003459, #007EA7);
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;
