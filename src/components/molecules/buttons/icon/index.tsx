import { Icon } from '@/components/atoms/icon';
import * as S from './styles';

type IconButtonProps = React.HTMLAttributes<HTMLButtonElement> &
  (
    | { iconProps: React.ComponentProps<typeof Icon>; iconName?: never }
    | { iconName: React.ComponentProps<typeof Icon>['name']; iconProps?: never }
  );

export const IconButton = ({ iconName, iconProps, ...rest }: IconButtonProps) => {
  return (
    <S.Button {...rest}>{iconProps ? <Icon {...iconProps} /> : <Icon name={iconName} />}</S.Button>
  );
};
