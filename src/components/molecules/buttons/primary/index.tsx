import * as S from './styles';

interface PrimaryButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
}

export const PrimaryButton = ({ text, ...rest }: PrimaryButtonProps) => {
  return <S.Button {...rest}>{text}</S.Button>;
};
