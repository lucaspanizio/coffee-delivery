import styled, { css } from 'styled-components';

export const Tag = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 4px 8px;
  border-radius: 100px;
  text-transform: uppercase;

  ${({ theme }) => css`
    ${theme.fonts.tag}
    color: ${theme.colors['yellow-dark']};
    background-color: ${theme.colors['yellow-light']};
  `};
`;
