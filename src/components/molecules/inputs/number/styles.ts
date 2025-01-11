import styled, { css } from 'styled-components';
import { flexCenter } from '@/styles/mixins';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.5rem;
  border-radius: 6px;
  min-width: 72px;

  ${({ theme }) => css`
    ${theme.fonts.textM}
    color: ${theme.colors['base-title']};
    background-color: ${theme.colors['base-button']};
  `}
`;

export const Button = styled.button`
  all: unset;
  cursor: pointer;

  ${flexCenter}

  ${({ theme }) => css`
    svg {
      stroke-width: 8px;
      stroke: ${theme.colors['purple']};
      fill: ${theme.colors['purple']};
    }

    &:hover svg {
      stroke: ${theme.colors['purple-dark']};
      fill: ${({ theme }) => theme.colors['purple-dark']};
    }
  `}
`;
