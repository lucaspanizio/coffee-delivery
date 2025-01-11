import { CartItem } from '@/components/molecules/cartItem';
import { Button } from '@/components/molecules/buttons';
import { Input } from '@/components/molecules/inputs';
import { Icon } from '@/components/atoms/icon';
import { Flex } from '@/components/atoms/flex';
import { Box } from '@/components/atoms/box';
import data from '../../../data.json';
import * as S from './styles';

export const Checkout = () => {
  return (
    <S.Wrapper>
      <section>
        <S.Title>Complete seu pedido</S.Title>
        <Box>
          <Flex gap="0.5rem" marginBottom="2rem">
            <Icon name="MapPin" color="yellow-dark" size={22} />
            <div>
              <S.Subtitle>Endereço da Entrega</S.Subtitle>
              <S.Description>Informe o endereço onde deseja receber seu pedido</S.Description>
            </div>
          </Flex>

          <S.AddressForm>
            <Input
              required
              variant="text"
              placeholder="CEP"
              containerStyle={{ gridArea: 'zipCode' }}
            />

            <Input
              required
              variant="text"
              placeholder="Rua"
              containerStyle={{ gridArea: 'street' }}
            />

            <Input
              required
              type="number"
              variant="text"
              placeholder="Número"
              containerStyle={{ gridArea: 'number' }}
            />

            <Input
              variant="text"
              placeholder="Complemento"
              containerStyle={{ gridArea: 'fullAddress' }}
            />

            <Input
              required
              variant="text"
              placeholder="Bairro"
              containerStyle={{ gridArea: 'neighborhood' }}
            />

            <Input
              required
              variant="text"
              placeholder="Cidade"
              containerStyle={{ gridArea: 'city' }}
            />
            <Input
              required
              variant="text"
              placeholder="UF"
              containerStyle={{ gridArea: 'state' }}
            />
          </S.AddressForm>
        </Box>

        <Box>
          <Flex gap="0.5rem" marginBottom="2rem">
            <Icon name="CurrencyDollar" color="purple" size={22} />
            <div>
              <S.Subtitle>Pagamento</S.Subtitle>
              <S.Description>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </S.Description>
            </div>
          </Flex>

          <Flex gap="0.75rem" flexDirection="row" justifyContent="space-between" flexWrap="wrap">
            <Input variant="radio" iconName="CreditCard" label="cartão de crédito" />
            <Input variant="radio" iconName="Bank" label="cartão de débito" />
            <Input variant="radio" iconName="Money" label="dinheiro" />
          </Flex>
        </Box>
      </section>

      <section>
        <S.Title>Cafés selecionados</S.Title>
        <Box borderBottomLeftRadius="36px" borderTopRightRadius="36px">
          <Flex flexDirection="column" gap="1.5rem">
            <CartItem product={data.coffees[0]} />
            <S.Divider />
            <CartItem product={data.coffees[6]} />
            <S.Divider />

            <S.Summary>
              <div className="row">
                <span className="label">Total de itens</span>
                <span className="value">R$ 29,70</span>
              </div>
              <div className="row">
                <span className="label">Entrega</span>
                <span className="value">R$ 3,50</span>
              </div>
              <div className="row total">
                <span className="label">Total</span>
                <span className="value">R$ 33,20</span>
              </div>
            </S.Summary>

            <Button variant="primary" text="confirmar pedido" />
          </Flex>
        </Box>
      </section>
    </S.Wrapper>
  );
};
