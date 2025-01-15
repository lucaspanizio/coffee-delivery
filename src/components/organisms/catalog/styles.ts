import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  row-gap: 3rem;

  @media (max-width: 1024px) {
    place-items: center;
  }
`;
