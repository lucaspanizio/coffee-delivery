import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 8px;
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

  display: flex;
  justify-content: center;
  align-items: center;

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
