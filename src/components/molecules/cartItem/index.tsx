import { CoffeeType } from '@/services/api/models/coffees';
import { formatCurrency } from '@/utils/formatCurrency';
import { Button } from '@/components/molecules/buttons';
import { Input } from '@/components/molecules/inputs';
import { Flex } from '@/components/atoms/flex';
import * as S from './styles';

interface CartProps {
  product: CoffeeType;
}

export const CartItem = ({ product }: CartProps) => {
  return (
    <Flex gap="1.25rem">
      <S.Image src={product.image} />

      <Flex flexDirection="column" gap="0.5rem">
        <S.Title>{product.title}</S.Title>
        <Flex gap="0.5rem">
          <Input variant="number" />
          <Button variant="secondary" startIcon="Trash" text="remover" />
        </Flex>
      </Flex>

      <S.Price>{formatCurrency(product.price, true)}</S.Price>
    </Flex>
  );
};
