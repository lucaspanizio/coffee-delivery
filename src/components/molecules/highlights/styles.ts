import { css, styled } from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    ${({ theme }) => css`
      span {
        ${theme.fonts.textM}
        color: ${theme.colors['base-text']};

        @media (max-width: 768px) {
          ${theme.fonts.textS}
        }
      }

      &:nth-of-type(1) div {
        background-color: ${theme.colors['yellow-dark']};
      }

      &:nth-of-type(2) div {
        background-color: ${theme.colors['base-text']};
      }

      &:nth-of-type(3) div {
        background-color: ${theme.colors['yellow']};
      }

      &:nth-of-type(4) div {
        background-color: ${theme.colors['purple']};
      }
    `}

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      border-radius: 50%;
    }
  }
`;
