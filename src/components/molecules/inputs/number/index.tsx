import { forwardRef } from 'react';
import { Icon } from '@/components/atoms/icon';
import * as S from './styles';

export type NumberInputHandle = {
  value: number;
};

interface NumberInputProps {
  value?: number;
  disabled?: boolean;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

export const NumberInput = forwardRef<NumberInputHandle, NumberInputProps>(
  ({ value, disabled, onIncrement, onDecrement }, _ref) => {
    return (
      <S.Wrapper>
        <S.Button onClick={onDecrement} disabled={disabled || value === 0}>
          <Icon name="Minus" size={14} />
        </S.Button>
        {value}
        <S.Button onClick={onIncrement} disabled={disabled}>
          <Icon name="Plus" size={14} />
        </S.Button>
      </S.Wrapper>
    );
  },
);

NumberInput.displayName = 'NumberInput';
