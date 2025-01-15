import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  max-width: 100%;
  width: 100%;

  &:has(input:not([required]):placeholder-shown)::after {
    content: 'Opcional';
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    font-weight: 400;
    font-style: italic;

    ${({ theme }) => css`
      ${theme.fonts.textXS};
      color: ${theme.colors['base-label']};
    `}
  }
`;

export const Input = styled.input`
  position: relative;
  padding: 0.75rem;
  width: 100%;
  max-width: 100%;
  border-radius: 4px;

  &[data-error='true'] {
    outline: 1px solid #b91c1c;
  }

  ${({ theme }) => css`
    color: ${theme.colors['base-text']};
    caret-color: ${theme.colors['base-label']};
    border: 1px solid ${theme.colors['base-button']};
    background-color: ${theme.colors['base-input']};
    ${theme.fonts.textS};

    &:focus {
      outline: 1px solid ${theme.colors['yellow-dark']};
    }

    &::placeholder {
      color: ${theme.colors['base-label']};
    }
  `}
`;
