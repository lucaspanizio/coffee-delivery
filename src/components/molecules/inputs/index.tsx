import { forwardRef } from 'react';
import { TextInput } from './text';
import { RadioInput } from './radio';
import { NumberInput } from './number';

const componentsMap = {
  text: TextInput,
  radio: RadioInput,
  number: NumberInput,
} as const;

type ComponentsMap = typeof componentsMap;

type InputProps<K extends keyof ComponentsMap> = React.ComponentProps<ComponentsMap[K]> & {
  variant: K;
};

export const Input = forwardRef<
  React.ComponentRef<(typeof componentsMap)[keyof ComponentsMap]>,
  InputProps<keyof ComponentsMap>
>(({ variant, ...rest }, ref) => {
  const Component = componentsMap[variant];
  return <Component {...(rest as any)} ref={ref} />;
});

Input.displayName = 'Input';
