import { useNavigate } from '@/hooks/useNavigate';
import { useCart } from '@/hooks/useCart';
import { Icon } from '@/components/atoms/icon';
import * as S from './styles';

export const CartButton = () => {
  const navigate = useNavigate();
  const { numberOfItems } = useCart();

  function goToCheckoutPage() {
    if (window.location.href.includes('/checkout')) return;
    navigate('/checkout');
  }

  return (
    <S.Button disabled={numberOfItems === 0} onClick={goToCheckoutPage}>
      {Number(numberOfItems) > 0 && <S.Badge>{numberOfItems}</S.Badge>}
      <Icon name="ShoppingCartSimple" color="yellow-dark" weight="fill" />
    </S.Button>
  );
};
