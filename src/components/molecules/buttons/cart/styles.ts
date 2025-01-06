import styled, { css } from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  padding: 8px;
  border-radius: 6px;

  ${({ theme }) => css`
    background-color: ${theme.colors['yellow-light']};

    &:hover {
      background-color: ${theme.colors['yellow']};

      svg {
        fill: ${theme.colors['yellow-light']};
      }
    }
  `};
`;

export const Badge = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 20px;
  height: 20px;
  border-radius: 50%;

  ${({ theme }) => css`
    ${theme.fonts.textXS}
    color: ${theme.colors['white']};
    box-shadow: 0 0 0 1px ${theme.colors['yellow-light']};
    background-color: ${theme.colors['yellow-dark']};
  `}
`;
