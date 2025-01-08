import styled, { css } from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding-top: 75px;
  gap: 0.5rem;
`;

export const Image = styled.img`
  position: absolute;
  top: -30px;
  width: 120px;
  min-width: 120px;
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    ${theme.fonts.titleS}
    color: ${theme.colors['base-subtitle']};
  `}
`;

export const Description = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.textS}
    color: ${theme.colors['base-label']};
  `}

  text-align-last: center;
`;

export const TagsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  background-color: inherit;
  margin-top: auto;
  width: 100%;
  z-index: 999;
`;

export const Price = styled.div`
  ${({ theme }) => css`
    span {
      color: ${theme.colors['base-text']};
    }

    span:first-of-type {
      margin-right: 0.25rem;
      ${theme.fonts.textS}
    }

    span:last-of-type {
      ${theme.fonts.titleM}
    }
  `}
`;

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
`;
