import { Icon, IconProps } from '@/components/atoms/icon';
import * as S from './styles';

type IconButtonProps = React.ComponentProps<'button'> & {} & (
    | { iconName: IconProps['name']; iconProps?: never }
    | { iconName?: never; iconProps: IconProps }
  );

export const IconButton = ({ iconName, iconProps, ...rest }: IconButtonProps) => {
  return (
    <S.Button {...rest}>
      {iconProps ? <Icon {...iconProps} /> : <Icon name={iconName} color="base-card" />}
    </S.Button>
  );
};
