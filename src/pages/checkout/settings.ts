import { z } from 'zod';

export const schema = z.object({
  zipCode: z.string().regex(/^\d{5}-?\d{3}$/, 'CEP inválido'),
  street: z.string().min(1, 'Campo obrigatório'),
  number: z.string().min(1, 'Campo obrigatório'),
  fullAddress: z.string().optional(),
  city: z.string().min(1, 'Campo obrigatório'),
  state: z.string().min(1, 'Campo obrigatório'),
  neighborhood: z.string().min(1, 'Campo obrigatório'),
  paymentMethod: z.enum(['credit', 'debit', 'cash'], {
    errorMap: () => {
      return { message: 'Escolha um método de pagamento' };
    },
  }),
});

export type FormProps = z.infer<typeof schema>;
