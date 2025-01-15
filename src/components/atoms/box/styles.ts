import styled from 'styled-components';

const properties = [
  'borderRadius',  'height', 'width', 'minWidth', 'minHeight',
  'padding', 'paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight', 
  'margin', 'marginBottom', 'marginTop', 'marginLeft', 'marginRight', 
] as const;

export interface BoxProps extends Pick<React.CSSProperties, typeof properties[number]> {}

export const Wrapper = styled.div`
  position: relative;
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors['base-card']};
`;
