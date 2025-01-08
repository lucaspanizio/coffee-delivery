import { CSSProperties } from 'styled-components';
import * as S from './styles';

type BorderRadiusProps = Pick<
  CSSProperties,
  | 'borderBottomLeftRadius'
  | 'borderBottomRightRadius'
  | 'borderTopLeftRadius'
  | 'borderTopRightRadius'
>;

interface BoxProps extends BorderRadiusProps {
  children?: React.ReactNode;
  padding?: CSSProperties['padding'];
  height?: CSSProperties['height'];
  width?: CSSProperties['width'];
}

export const Box = ({ children, ...styleProps }: BoxProps) => {
  return <S.Wrapper style={styleProps}>{children}</S.Wrapper>;
};
