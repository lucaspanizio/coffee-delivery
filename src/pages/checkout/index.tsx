import { Fragment } from 'react';
import { FormProvider } from 'react-hook-form';
import { useForm } from '@/hooks/useForm';
import { useCart } from '@/hooks/useCart';
import { useNavigate } from '@/hooks/useNavigate';
import { formatCurrency } from '@/utils/formatCurrency';
import { PaymentMethodSelector } from '@/components/organisms/paymentMethodSelector';
import { CartItem } from '@/components/molecules/cartItem';
import { Button } from '@/components/molecules/buttons';
import { Input } from '@/components/molecules/inputs';
import { Icon } from '@/components/atoms/icon';
import { Flex } from '@/components/atoms/flex';
import { Box } from '@/components/atoms/box';
import { FormProps, schema } from './settings';
import * as S from './styles';

export const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, clearCart, totalPrices } = useCart();

  const formMethods = useForm({ schema, mode: 'onSubmit' });

  const hasAnyItem = Number(cartItems?.length) > 0;

  function handleSubmit(formData: FormProps) {
    clearCart();
    navigate('/success', {
      state: { ...formData },
    });
  }

  return (
    <S.Wrapper>
      <section>
        <FormProvider {...formMethods}>
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
                name="zipCode"
                containerStyle={{ gridArea: 'zipCode' }}
              />

              <Input
                required
                variant="text"
                placeholder="Rua"
                name="street"
                containerStyle={{ gridArea: 'street' }}
              />

              <Input
                required
                type="number"
                variant="text"
                placeholder="Número"
                name="number"
                containerStyle={{ gridArea: 'number' }}
              />

              <Input
                variant="text"
                placeholder="Complemento"
                name="fullAddress"
                containerStyle={{ gridArea: 'fullAddress' }}
              />

              <Input
                required
                variant="text"
                placeholder="Bairro"
                name="neighborhood"
                containerStyle={{ gridArea: 'neighborhood' }}
              />

              <Input
                required
                variant="text"
                placeholder="Cidade"
                name="city"
                containerStyle={{ gridArea: 'city' }}
              />
              <Input
                required
                variant="text"
                placeholder="UF"
                name="state"
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

            <PaymentMethodSelector />
          </Box>
        </FormProvider>
      </section>

      <section>
        <S.Title>Cafés selecionados</S.Title>
        <Box borderRadius="6px 36px" minHeight={448}>
          <Flex flexDirection="column" gap="1.5rem">
            {hasAnyItem ? (
              <Fragment>
                {cartItems?.map(({ coffee, quantity }) => (
                  <Fragment key={coffee?.id}>
                    <CartItem coffee={coffee} quantity={quantity} />
                    <S.Divider />
                  </Fragment>
                ))}
              </Fragment>
            ) : (
              <Fragment>
                Nenhum café selecionado
                <S.Divider />
              </Fragment>
            )}

            <S.Summary>
              <div className="row">
                <span className="label">Total de itens</span>
                <span className="value">{formatCurrency(totalPrices.items, true)}</span>
              </div>
              <div className="row">
                <span className="label">Entrega</span>
                <span className="value">{formatCurrency(totalPrices.deliveryTax, true)}</span>
              </div>
              <div className="row total">
                <span className="label">Total</span>
                <span className="value">{formatCurrency(totalPrices.grandTotal, true)}</span>
              </div>
            </S.Summary>

            <Button
              variant="primary"
              text="confirmar pedido"
              fullWidth
              disabled={!hasAnyItem}
              onClick={formMethods.handleSubmit(handleSubmit)}
            />
          </Flex>
        </Box>
      </section>
    </S.Wrapper>
  );
};
