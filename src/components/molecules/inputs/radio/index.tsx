import { Icon } from '@/components/atoms/icon';
import { Flex } from '@/components/atoms/flex';
import * as S from './styles';

type IconProps = React.ComponentProps<typeof Icon>;

interface RadioInputProps {
  label: string;
  iconName: IconProps['name'];
}

export const RadioInput = ({ iconName, label }: RadioInputProps) => {
  return (
    <S.Wrapper>
      <input type="radio" id={label} />

      <S.Label htmlFor={label}>
        <Flex
          gap="0.75rem"
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
          height="100%">
          <Icon name={iconName} size={16} color="purple" /> {label}
        </Flex>
      </S.Label>
    </S.Wrapper>
  );
};
