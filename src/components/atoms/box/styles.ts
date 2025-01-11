import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors['base-card']};
`;
