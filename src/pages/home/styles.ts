import styled, { css } from 'styled-components';

export const FirstSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 3rem 10rem;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('images/brand/hero-bg.svg');

  img {
    justify-self: end;
    max-width: 100%;
    min-width: 476px;
    height: auto;
  }

  ${({ theme }) => css`
    header {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      h1 {
        ${theme.fonts.titleXL}
        color: ${theme.colors['base-title']};
        margin-bottom: 1rem;
      }

      h4 {
        ${theme.fonts.textL}
        color: ${theme.colors['base-subtitle']};
        margin-bottom: 2rem;
      }
    }

    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
      padding: 2rem 5rem;

      img {
        justify-self: center;
        margin-top: 2rem;
        min-width: 300px;
      }

      header {
        h1 {
          ${theme.fonts.titleL}
        }

        h1,
        h4 {
          text-align: center;
        }
      }
    }

    @media (max-width: 768px) {
      padding: 2rem;
      img {
        min-width: 200px;
      }
    }
  `};
`;

export const SecoundSection = styled.section`
  padding: 3rem 10rem;

  ${({ theme }) => css`
    & > h2 {
      ${theme.fonts.titleL}
      color: ${theme.colors['base-subtitle']};
      margin-bottom: 3.375rem;
      white-space: nowrap;
    }
  `}

  @media (max-width: 1024px) {
    text-align: center;
    padding: 1rem 2rem;
  }
`;
