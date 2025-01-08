import styled, { css } from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  border-radius: 6px;

  ${({ theme }) => css`
    background-color: ${theme.colors['purple']};

    &:hover {
      background-color: ${theme.colors['purple-dark']};
    }

    svg {
      fill: ${theme.colors['base-card']};
    }
  `};
`;
