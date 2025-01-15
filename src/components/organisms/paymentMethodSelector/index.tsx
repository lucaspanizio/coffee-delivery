import { useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Input } from '@/components/molecules/inputs';
import { Flex } from '@/components/atoms/flex';
import { useToast } from '@/hooks/useToast';

export const PaymentMethodSelector = () => {
  const { showToast } = useToast();
  const { control, formState } = useFormContext();

  useEffect(() => {
    if (formState.errors.paymentMethod) {
      showToast({ type: 'error', message: String(formState.errors.paymentMethod.message) });
    }
  }, [formState.errors.paymentMethod]);

  return (
    <Controller
      control={control}
      name="paymentMethod"
      defaultValue=""
      render={({ field: { value, onChange, ...formProps } }) => {
        return (
          <>
            <Flex gap="0.75rem" flexDirection="row" justifyContent="space-between" flexWrap="wrap">
              <Input
                {...formProps}
                checked={value === 'credit'}
                onChange={(e) => onChange(e.target.value)}
                variant="radio"
                iconName="CreditCard"
                label="cartão de crédito"
                value="credit"
              />
              <Input
                {...formProps}
                checked={value === 'debit'}
                onChange={(e) => onChange(e.target.value)}
                variant="radio"
                iconName="Bank"
                label="cartão de débito"
                value="debit"
              />
              <Input
                {...formProps}
                checked={value === 'cash'}
                onChange={(e) => onChange(e.target.value)}
                variant="radio"
                iconName="Money"
                label="dinheiro"
                value="cash"
              />
            </Flex>
          </>
        );
      }}
    />
  );
};
