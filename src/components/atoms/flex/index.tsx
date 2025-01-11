import { ReactNode } from 'react';
import * as S from './styles';

interface FlexProps extends S.FlexProps {
  children: ReactNode;
}

export const Flex = ({ children, ...rest }: FlexProps) => {
  return <S.Wrapper {...rest}>{children}</S.Wrapper>;
};
