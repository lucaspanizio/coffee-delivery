import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;

    ${({ theme }) => css`
      color: ${theme.colors['base-text']};
      background: ${theme.colors.background};
    `};
  }

  body, input, textarea, button {
    ${({ theme }) => theme.fonts.textM};
  }

  button {
    border: none;
    cursor: pointer;
  }
`;
