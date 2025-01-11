import styled, { css } from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  padding: 2rem 10rem;
  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: 1024px) {
    padding: 2rem 5rem;
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  gap: 4px;

  padding: 0.5rem;
  border-radius: 6px;

  ${({ theme }) => css`
    ${theme.fonts.textS}
    color: ${theme.colors['purple-dark']};
    background-color: ${theme.colors['purple-light']};
  `}
`;
