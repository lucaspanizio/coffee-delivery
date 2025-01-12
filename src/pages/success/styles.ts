import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 40px;

  padding: 2rem 10rem;
  @media (max-width: 1024px) {
    padding: 2rem 5rem;
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }

  img {
    margin-top: -13px;
    max-width: 100%;
  }
`;

export const Heading = styled.div`
  width: 100%;

  & > h1 {
    ${({ theme }) => css`
      ${theme.fonts.titleL}
      color: ${theme.colors['yellow-dark']};
    `}
  }

  & > span {
    position: relative;

    svg {
      position: absolute;
      margin-top: -3px;
      margin-left: 5px;
    }

    ${({ theme }) => css`
      ${theme.fonts.textL}
      color: ${theme.colors['base-subtitle']};
    `}
  }
`;

export const Details = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex: 1;

  width: 100%;
  max-width: 626px;
  height: min-content;
  border-radius: 6px 36px;
  padding: 40px;

  ${({ theme }) => css`
    background-color: ${theme.colors.background};

    span {
      ${theme.fonts.textM}
      color: ${theme.colors['base-text']};
    }

    &::after {
      content: '';
      position: absolute;
      top: -1px;
      left: -1px;
      right: -1px;
      bottom: -1px;
      border-radius: inherit;
      background: linear-gradient(to bottom right, ${theme.colors.yellow}, ${theme.colors.purple});
      z-index: -1;
    }
  `}
`;
