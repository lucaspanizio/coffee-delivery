import { CoffeeType } from '@/services/api/models/coffees';
import { useCart } from '@/hooks/useCart';
import { Card } from './card';
import * as S from './styles';

interface CatalogProps {
  coffees: CoffeeType[];
}

export const Catalog = ({ coffees }: CatalogProps) => {
  const { cartItems = [] } = useCart();

  function getInitialState(id: string) {
    const cartItem = cartItems?.find((item) => item.coffee?.id === id);
    return {
      alreadyInCart: !!cartItem,
      initialQuantity: cartItem?.quantity ?? 0,
    };
  }

  return (
    <S.Wrapper>
      {coffees.map((coffee) => (
        <Card key={coffee.id} coffee={coffee} {...getInitialState(coffee.id)} />
      ))}
    </S.Wrapper>
  );
};
