import * as S from './styles';

interface PrimaryButtonProps extends React.ComponentProps<'button'> {
  text: string;
  fullWidth?: boolean;
}

export const PrimaryButton = ({ text, fullWidth = false, ...rest }: PrimaryButtonProps) => {
  return (
    <S.Button {...rest} fullWidth={fullWidth}>
      {text}
    </S.Button>
  );
};
