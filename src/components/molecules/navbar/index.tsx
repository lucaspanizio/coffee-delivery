import { Icon } from '@/components/atoms/icon';
import * as S from './styles';
import { Button } from '../buttons';

export const Navbar = () => {
  return (
    <S.Wrapper>
      <img
        src="images/brand/logo.svg"
        alt="Copo de café com um foguete decolando dentro. A direita, está escrito Coffee em negrito e Delivery com letras finas."
      />

      <S.ButtonsWrapper>
        <S.Button>
          <Icon name="MapPin" size={22} color="purple" weight="fill" />
          Londrina, PR
        </S.Button>
        <Button variant="cart" items={3} />
      </S.ButtonsWrapper>
    </S.Wrapper>
  );
};
