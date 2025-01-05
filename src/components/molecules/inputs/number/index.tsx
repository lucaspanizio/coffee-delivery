import { useState } from 'react';
import { Icon } from '@/components/atoms/icon';
import * as S from './styles';

export const NumberInput = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prevState) => prevState + 1);
  const decrement = () => setCount((prevState) => prevState - 1);

  return (
    <S.Wrapper>
      <S.Button onClick={decrement} disabled={count === 0}>
        <Icon name="Minus" size={14} />
      </S.Button>
      {count}
      <S.Button onClick={increment}>
        <Icon name="Plus" size={14} />
      </S.Button>
    </S.Wrapper>
  );
};
