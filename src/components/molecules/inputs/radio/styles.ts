import styled, { css } from 'styled-components';
import { flexCenter } from '@/styles/mixins';

export const Wrapper = styled.div`
  ${flexCenter}
  position: relative;
  flex: 1;

  border-radius: 6px;
  border: 1px solid transparent;
  user-select: none;
  cursor: pointer;

  input {
    display: none;
  }

  ${({ theme }) => css`
    background-color: ${theme.colors['base-button']};

    &:has(input:checked) {
      background-color: ${({ theme }) => theme.colors['purple-light']};
      border-color: ${({ theme }) => theme.colors.purple};

      &:not(:hover) {
        border-color: ${theme.colors.purple};
      }
    }

    /* &[data-state='true'] {
      background-color: ${theme.colors['purple-light']};

      &:not(:hover) {
        border-color: ${theme.colors.purple};
      }
    } */

    &:hover {
      background-color: ${theme.colors['base-hover']};
    }
  `}
`;

export const Label = styled.label`
  cursor: inherit;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
  height: 100%;
  padding: 1rem;

  ${({ theme }) => css`
    ${theme.fonts.buttonM}
    color: ${theme.colors['base-text']};
  `}
`;
