import styled, { css } from 'styled-components';
import { flexCenter } from '@/styles/mixins';

export const Button = styled.button`
  ${flexCenter}
  gap: 0.25rem;

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
