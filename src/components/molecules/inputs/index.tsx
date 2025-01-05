import { TextInput } from './text';
import { RadioInput } from './radio';
import { NumberInput } from './number';

const componentsMap = {
  text: TextInput,
  radio: RadioInput,
  number: NumberInput,
} as const;

type ComponentsMap = typeof componentsMap;

type InputProps = {
  [K in keyof ComponentsMap]: React.ComponentProps<ComponentsMap[K]> & { variant: K };
}[keyof ComponentsMap];

export const Input = ({ variant, ...rest }: InputProps) => {
  const Component = componentsMap[variant];
  return <Component {...(rest as any)} />;
};
