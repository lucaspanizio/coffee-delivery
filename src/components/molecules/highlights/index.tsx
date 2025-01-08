import { Icon } from '@/components/atoms/icon';
import * as S from './styles';

export const Highlights = () => {
  return (
    <S.List>
      <li>
        <div>
          <Icon name="ShoppingCart" color="background" size={16} weight="fill" />
        </div>
        <span>Compra simples e segura</span>
      </li>

      <li>
        <div>
          <Icon name="Package" color="background" size={16} weight="fill" />
        </div>
        <span>Embalagem mantém o café intacto</span>
      </li>
      <li>
        <div>
          <Icon name="Timer" color="background" size={16} weight="fill" />
        </div>
        <span>Entrega rápida e rastreada</span>
      </li>
      <li>
        <div>
          <Icon name="Coffee" color="background" size={16} weight="fill" />
        </div>
        <span>O café chega quentinho até você</span>
      </li>
    </S.List>
  );
};
