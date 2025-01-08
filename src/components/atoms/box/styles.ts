import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 40px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors['base-card']};
`;
