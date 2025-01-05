import * as S from './styles';

interface TextInputProps extends React.ComponentProps<'input'> {}

export const TextInput = (props: TextInputProps) => {
  return (
    <S.Wrapper>
      <S.Input {...props} />
    </S.Wrapper>
  );
};
