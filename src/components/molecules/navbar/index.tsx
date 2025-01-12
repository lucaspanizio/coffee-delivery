import { useNavigate } from 'react-router-dom';
import { useGeolocation } from '@/hooks/useGeolocation';
import { Button } from '@/components/molecules/buttons';
import { Icon } from '@/components/atoms/icon';
import { Flex } from '@/components/atoms/flex';
import * as S from './styles';

export const Navbar = () => {
  const navigate = useNavigate();
  const { location } = useGeolocation();

  return (
    <S.Wrapper>
      <img
        src="images/brand/logo.svg"
        alt="Copo de café com um foguete decolando dentro. A direita, está escrito Coffee em negrito e Delivery com letras finas."
        style={{ cursor: 'pointer' }}
        onClick={() => navigate('/')}
      />

      <Flex gap="0.75rem">
        {location && (
          <S.Button>
            <Icon name="MapPin" size={22} color="purple" weight="fill" />
            {location.city}, {location.state}
          </S.Button>
        )}
        <Button variant="cart" items={3} />
      </Flex>
    </S.Wrapper>
  );
};
