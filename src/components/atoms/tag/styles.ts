import styled, { css } from 'styled-components';
import { flexCenter } from '@/styles/mixins';

export const Tag = styled.span`
  ${flexCenter}

  padding: 4px 8px;
  border-radius: 100px;
  text-transform: uppercase;

  ${({ theme }) => css`
    ${theme.fonts.tag}
    color: ${theme.colors['yellow-dark']};
    background-color: ${theme.colors['yellow-light']};
  `};
`;
