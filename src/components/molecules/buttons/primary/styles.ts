import styled, { css } from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.75rem 0.5rem;
  border-radius: 6px;
  text-transform: uppercase;

  ${({ theme }) => css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.yellow};
    ${theme.fonts.buttonG};

    &:hover {
      background-color: ${theme.colors['yellow-dark']};
    }
  `};
`;
