import { Icon } from '@/components/atoms/icon';
import * as S from './styles';

type IconProps = React.ComponentProps<typeof Icon>;

interface RadioInputProps {
  label: string;
  iconName: IconProps['name'];
  isSelected?: boolean;
}

export const RadioInput = ({ isSelected = true, iconName, label }: RadioInputProps) => {
  return (
    <S.Wrapper data-state={isSelected}>
      <input type="radio" />
      <Icon name={iconName} size={16} color="purple" />
      <S.Label>{label}</S.Label>
    </S.Wrapper>
  );
};
