import styled, { css } from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  padding: 0.5rem;
  border-radius: 6px;
  text-transform: uppercase;

  ${({ theme }) => css`
    color: ${theme.colors['base-text']};
    background-color: ${theme.colors['base-button']};
    ${theme.fonts.buttonM}

    &:hover {
      color: ${theme.colors['base-subtitle']};
      background-color: ${theme.colors['base-hover']};

      svg {
        fill: ${theme.colors['purple-dark']};
      }
    }

    svg {
      fill: ${theme.colors['purple']};
    }
  `};
`;
