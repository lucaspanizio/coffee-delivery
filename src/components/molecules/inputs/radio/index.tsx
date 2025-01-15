import { forwardRef } from 'react';
import { Icon } from '@/components/atoms/icon';
import { Flex } from '@/components/atoms/flex';
import * as S from './styles';

type IconProps = React.ComponentProps<typeof Icon>;

interface RadioInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  value: string;
  label: string;
  iconName: IconProps['name'];
}

export const RadioInput = forwardRef<HTMLInputElement, RadioInputProps>(
  ({ name, value, iconName, label, ...rest }, ref) => {
    const id = `${name}-${value}`;

    return (
      <S.Wrapper>
        <input type="radio" id={id} name={name} value={value} ref={ref} {...rest} />
        <S.Label htmlFor={id}>
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
  },
);

RadioInput.displayName = 'RadioInput';
