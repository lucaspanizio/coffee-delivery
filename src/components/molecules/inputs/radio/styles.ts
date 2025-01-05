import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  padding: 16px;
  border-radius: 6px;
  border: 1px solid transparent;
  cursor: pointer;

  input {
    display: none;
  }

  ${({ theme }) => css`
    background-color: ${theme.colors['base-button']};

    &[data-state='true'] {
      background-color: ${theme.colors['purple-light']};

      &:not(:hover) {
        border-color: ${theme.colors.purple};
      }
    }

    &:hover {
      background-color: ${theme.colors['base-hover']};
    }
  `}
`;

export const Label = styled.label`
  cursor: inherit;
  text-transform: uppercase;

  ${({ theme }) => css`
    ${theme.fonts.buttonM}
    color: ${theme.colors['base-text']};
  `}
`;
