import styled, { css } from 'styled-components';
import { flexCenter } from '@/styles/mixins';

export const Button = styled.button`
  ${flexCenter}

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
