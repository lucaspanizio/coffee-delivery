import styled, { css } from 'styled-components';
import { flexCenter } from '@/styles/mixins';

export const Button = styled.button`
  ${flexCenter}
  width: 100%;

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
