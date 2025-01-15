import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    ${({ theme }) => css`
      --toastify-text-color-light: ${theme.colors['base-text']};
      --toastify-color-light: ${theme.colors.background};
      --toastify-icon-color-info: ${theme.colors.purple};
      --toastify-color-progress-info: ${theme.colors.purple};
    `}
  }

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

  ul {
    list-style: none;
  }

  body, input, textarea, button {
    ${({ theme }) => theme.fonts.textM};
  }

  button {
    border: none;
    cursor: pointer;
  }

  .Toastify__toast {
    font-size: 0.95rem;
    font-family: 'Roboto', sans-serif;
  }
`;
