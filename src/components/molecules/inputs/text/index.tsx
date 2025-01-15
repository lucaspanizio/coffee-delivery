import { forwardRef, ComponentProps, CSSProperties } from 'react';
import { useFormContext } from 'react-hook-form';
import * as S from './styles';

interface TextInputProps extends ComponentProps<'input'> {
  name: string;
  containerStyle?: CSSProperties;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ name, containerStyle, ...rest }, _ref) => {
    const { register, formState } = useFormContext();

    return (
      <S.Wrapper style={containerStyle}>
        <S.Input {...rest} {...register(name)} data-error={!!formState.errors[name]} />
      </S.Wrapper>
    );
  },
);

TextInput.displayName = 'TextInput';
