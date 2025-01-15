import { useState } from 'react';
import { CoffeeType } from '@/services/api/models/coffees';
import { formatCurrency } from '@/utils/formatCurrency';
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/molecules/buttons';
import { Input } from '@/components/molecules/inputs';
import { Flex } from '@/components/atoms/flex';
import * as S from './styles';

interface CartProps {
  coffee: CoffeeType;
  quantity: number;
}

export const CartItem = ({ coffee, quantity: initialQuantity }: CartProps) => {
  const { removeFromCart, updateQuantity } = useCart();
  const [quantity, setQuantity] = useState(initialQuantity);

  function handleIncrement() {
    setQuantity((prevState) => prevState + 1);
    updateQuantity(coffee.id, +1);
  }

  function handleDecrement() {
    if (quantity === 1) return removeFromCart(coffee.id);
    setQuantity((prevState) => Math.max(prevState - 1, 0));
    updateQuantity(coffee.id, -1);
  }

  return (
    <Flex gap="1.25rem">
      <S.Image src={coffee?.image} />

      <Flex flexDirection="column" gap="0.5rem">
        <S.Title>{coffee?.title}</S.Title>
        <Flex gap="0.5rem">
          <Input
            variant="number"
            value={quantity}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
          <Button
            variant="secondary"
            startIcon="Trash"
            text="remover"
            onClick={removeFromCart.bind(null, coffee?.id)}
          />
        </Flex>
      </Flex>

      <S.Price>{formatCurrency(coffee?.price, true)}</S.Price>
    </Flex>
  );
};
