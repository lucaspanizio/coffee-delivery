import * as S from './styles';

interface BoxProps extends S.BoxProps {
  children?: React.ReactNode;
}

export const Box = ({ children, ...styleProps }: BoxProps) => {
  return <S.Wrapper style={styleProps}>{children}</S.Wrapper>;
};
