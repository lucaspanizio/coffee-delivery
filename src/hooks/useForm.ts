import { z, ZodSchema } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm as useFormRHF, UseFormProps, UseFormReturn } from 'react-hook-form';

export const useForm = <TSchema extends ZodSchema>({
  schema,
  ...options
}: {
  schema: TSchema;
} & Omit<UseFormProps<z.infer<TSchema>>, 'resolver'>): UseFormReturn<z.infer<TSchema>> => {
  return useFormRHF<z.infer<TSchema>>({
    ...options,
    resolver: zodResolver(schema),
  });
};
