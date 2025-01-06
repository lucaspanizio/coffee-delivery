import { Icon, IconProps } from '@/components/atoms/icon';
import * as S from './styles';

type SecondaryButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  text: string;
  startIcon?: IconProps['name'];
};

export const SecondaryButton = ({ text, startIcon, ...rest }: SecondaryButtonProps) => {
  return (
    <S.Button {...rest}>
      {startIcon && <Icon name={startIcon} size={16} />}
      {text}
    </S.Button>
  );
};
