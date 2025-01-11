import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;

  section {
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
  }

  section:first-of-type {
    flex: 1 1 640px;
  }

  section:last-of-type {
    flex: 0 1 448px;
  }

  padding: 2rem 10rem;
  @media (max-width: 1024px) {
    padding: 2rem 5rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 2rem;
    grid-template-columns: 100%;
  }
`;

export const AddressForm = styled.div`
  display: grid;
  grid-template-areas:
    'zipCode . .'
    'street street street'
    'number fullAddress fullAddress'
    'neighborhood city state';
  grid-template-columns: 200px 1fr 60px;
  grid-template-rows: repeat(4, auto);
  grid-gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 100px 1fr 50px;
    grid-template-areas:
      'zipCode . .'
      'street street street'
      'number neighborhood neighborhood'
      'fullAddress fullAddress fullAddress'
      'city city state';
  }
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    ${theme.fonts.titleXS}
    color: ${theme.colors['base-subtitle']}
  `}
`;

export const Subtitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  ${({ theme }) => css`
    ${theme.fonts.textM}
    color: ${theme.colors['base-subtitle']}
  `}
`;

export const Description = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.textS}
    color: ${theme.colors['base-text']}
  `}
`;

export const Divider = styled.hr`
  width: 100%;
  height: 1px;
  border: none;
  background-color: ${({ theme }) => theme.colors['base-button']};
`;

export const Summary = styled.div`
  padding: 0 5px;
  display: grid;
  gap: 0.5rem;

  ${({ theme }) => css`
    .row {
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      color: ${theme.colors['base-text']};
    }

    .label {
      text-align: left;
      ${theme.fonts.textS}
    }

    .value {
      text-align: right;
      ${theme.fonts.textM}
    }

    .total span {
      ${theme.fonts.textBoldL}
      color: ${theme.colors['base-subtitle']};
    }
  `};
`;
