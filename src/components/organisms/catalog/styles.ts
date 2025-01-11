import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  row-gap: 3rem;

  @media (max-width: 1024px) {
    place-items: center;
  }
`;

export const Image = styled.img`
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);

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
