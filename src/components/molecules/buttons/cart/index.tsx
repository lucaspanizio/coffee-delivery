import { useNavigate } from 'react-router-dom';
import { Icon } from '@/components/atoms/icon';
import * as S from './styles';

interface CartButtonProps {
  items?: number;
}

export const CartButton = ({ items }: CartButtonProps) => {
  const navigate = useNavigate();

  function goToCheckoutPage() {
    if (window.location.href.includes('/checkout')) return;
    navigate('/checkout');
  }

  return (
    <S.Button onClick={goToCheckoutPage}>
      {items && <S.Badge>{items}</S.Badge>}
      <Icon name="ShoppingCartSimple" color="yellow-dark" weight="fill" />
    </S.Button>
  );
};
