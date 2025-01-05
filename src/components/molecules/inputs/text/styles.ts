import styled, { css } from 'styled-components';

export const Input = styled.input`
  padding: 12px;
  position: relative;

  &:not(:required) {
    padding-right: 60px;
  }

  ${({ theme }) => css`
    border-radius: 4px;
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

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;

  ${({ theme }) => css`
    &:not(${Input}:required)::after {
      content: 'Opcional';
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);

      pointer-events: none;

      ${theme.fonts.textXS};
      font-weight: 400;
      font-style: italic;
      color: ${theme.colors['base-label']};
    }
  `}
`;
