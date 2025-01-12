import styled, { css } from 'styled-components';
import { flexCenter } from '@/styles/mixins';

interface ButtonProps {
  fullWidth: boolean;
}

export const Button = styled.button<ButtonProps>`
  ${flexCenter}

  padding: 0.75rem;
  border-radius: 6px;
  text-transform: uppercase;

  ${({ theme, fullWidth }) => css`
    width: ${fullWidth ? '100%' : 'fit-content'};
    color: ${theme.colors.white};
    background-color: ${theme.colors.yellow};
    ${theme.fonts.buttonG};

    &:hover {
      background-color: ${theme.colors['yellow-dark']};
    }
  `};
`;
