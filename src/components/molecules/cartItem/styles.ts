import styled, { css } from 'styled-components';

export const Price = styled.span`
  margin-left: auto;
  margin-right: 5px;

  ${({ theme }) => css`
    ${theme.fonts.textBoldM};
    color: ${theme.colors['base-text']};
  `}
`;

export const Image = styled.img`
  max-width: 66px;
  object-fit: cover;
`;

export const Title = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.textM}
    color: ${theme.colors['base-subtitle']}
  `}
`;
