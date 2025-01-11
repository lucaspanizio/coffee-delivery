import { CSSProperties } from 'styled-components';
import * as S from './styles';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  containerStyle?: CSSProperties;
}

export const TextInput = ({ containerStyle, ...rest }: TextInputProps) => {
  return (
    <S.Wrapper style={containerStyle}>
      <S.Input {...rest} />
    </S.Wrapper>
  );
};
