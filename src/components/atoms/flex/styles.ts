import React from 'react';
import styled from 'styled-components';

const properties = [
  'flex', 'flexShrink', 'flexGrow', 'flexBasis', 'flexWrap', 
  'flexDirection', 'justifyContent', 'alignContent', 'alignItems', 'gap',
  'padding', 'paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight', 
  'margin', 'marginBottom', 'marginTop', 'marginLeft', 'marginRight',
  'height', 'width',
] as const;

export interface FlexProps extends Pick<React.CSSProperties, typeof properties[number]> {}

export const Wrapper = styled.div.attrs<FlexProps>(({ ...props }) => ({
  style: { ...props },
}))<FlexProps>`
  position: relative;
  display: flex;
`;
