import { Flex } from '@/components/atoms/flex';
import { Icon } from '@/components/atoms/icon';
import * as S from './styles';

export const Success = () => {
  return (
    <S.Wrapper>
      <S.Heading>
        <h1>Uhul! Pedido confirmado</h1>
        <span>
          Agora é só aguardar que logo o pedido chegará até você quetinho{' '}
          <Icon name="Coffee" size={28} weight="fill" color="base-subtitle" />
        </span>
      </S.Heading>

      <Flex justifyContent="space-between" flexWrap="wrap" gap="4rem" width="100%">
        <S.Details>
          <Flex alignItems="center" gap="0.75rem">
            <Icon name="MapPin" size={32} color="background" weight="fill" background="purple" />
            <Flex flexDirection="column">
              <span>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </span>
              <span>Farrapos - Porto Alegre, RS</span>
            </Flex>
          </Flex>

          <Flex alignItems="center" gap="0.75rem">
            <Icon name="Timer" size={32} color="background" weight="fill" background="yellow" />
            <Flex flexDirection="column">
              <span>Previsão de entrega</span>
              <span>
                <strong>20min - 30min</strong>
              </span>
            </Flex>
          </Flex>

          <Flex alignItems="center" gap="0.75rem">
            <Icon name="CurrencyDollar" size={32} color="background" background="yellow-dark" />
            <Flex flexDirection="column">
              <span>Pagamento na entrega</span>
              <span>
                <strong>Cartão de crédito</strong>
              </span>
            </Flex>
          </Flex>
        </S.Details>
        <img
          src="images/brand/delivery.svg"
          alt="Homem branco de cabelo preto, com camiseta amarela, calça verde e sapados pretos sobre uma moto roxa em movimento."
        />
      </Flex>
    </S.Wrapper>
  );
};
