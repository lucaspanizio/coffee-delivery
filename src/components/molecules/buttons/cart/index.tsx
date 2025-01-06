import { Icon } from '@/components/atoms/icon';
import * as S from './styles';

interface CartButtonProps {
  items?: number;
}

export const CartButton = ({ items }: CartButtonProps) => {
  return (
    <S.Button>
      <S.Badge>{items}</S.Badge>
      <Icon name="ShoppingCartSimple" color="yellow-dark" weight="fill" />
    </S.Button>
  );
};
