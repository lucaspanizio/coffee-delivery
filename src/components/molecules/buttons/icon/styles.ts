import styled, { css } from 'styled-components';
import { flexCenter } from '@/styles/mixins';

export const Button = styled.button`
  ${flexCenter}

  padding: 0.5rem;
  border-radius: 6px;

  ${({ theme }) => css`
    background-color: ${theme.colors['purple']};

    &:hover.not(:disabled) {
      background-color: ${theme.colors['purple-dark']};
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    svg {
      fill: ${theme.colors['base-card']};
    }
  `};
`;
