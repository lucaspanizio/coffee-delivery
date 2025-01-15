import { useState } from 'react';
import { Box } from '@/components/atoms/box';
import { Flex } from '@/components/atoms/flex';
import { CoffeeType } from '@/services/api/models/coffees';
import { formatCurrency } from '@/utils/formatCurrency';
import { useCart } from '@/hooks/useCart';
import { useToast } from '@/hooks/useToast';
import { Button } from '@/components/molecules/buttons';
import { Input } from '@/components/molecules/inputs';
import { Tag } from '@/components/atoms/tag';
import * as S from './styles';

interface CardProps {
  coffee: CoffeeType;
  alreadyInCart?: boolean;
  initialQuantity?: number;
}

export const Card = ({ coffee, alreadyInCart = false, initialQuantity = 0 }: CardProps) => {
  const [isAddedToCart, setIsAddedToCart] = useState(alreadyInCart);
  const [quantity, setQuantity] = useState(initialQuantity);

  function handleIncrement() {
    setQuantity((prevState) => prevState + 1);
  }

  function handleDecrement() {
    setQuantity((prevState) => Math.max(prevState - 1, 0));
  }

  const { addToCart } = useCart();
  const { showToast } = useToast();

  function handleAddToCart() {
    if (isAddedToCart) return;
    if (quantity === 0) return showToast({ message: 'Quantidade inválida', type: 'info' });

    addToCart(coffee, quantity);
    setIsAddedToCart(true);
  }

  return (
    <Box
      key={coffee.title}
      borderRadius="6px 36px"
      padding="1.5rem"
      width="16rem"
      height="19.375rem">
      <S.Image src={coffee?.image} />

      <Flex flexDirection="column" alignItems="center" gap="0.5rem" paddingTop="75px" height="100%">
        <Flex gap="0.5rem" marginBottom="1rem">
          {coffee?.tags.map((tag, index) => (
            <Tag key={index} text={tag} />
          ))}
        </Flex>

        <S.Title>{coffee?.title}</S.Title>
        <S.Description>{coffee?.description}</S.Description>

        <S.Footer>
          <S.Price>
            <span>R$</span>
            <span>{formatCurrency(coffee?.price)}</span>
          </S.Price>

          <Flex gap="0.5rem">
            <Input
              variant="number"
              value={quantity}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
              disabled={isAddedToCart}
            />
            <Button
              variant="icon"
              disabled={isAddedToCart}
              iconProps={{ name: isAddedToCart ? 'CheckFat' : 'ShoppingCart', weight: 'fill' }}
              onClick={handleAddToCart}
            />
          </Flex>
        </S.Footer>
      </Flex>
    </Box>
  );
};
