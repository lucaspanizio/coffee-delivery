import { CartButton } from './cart';
import { IconButton } from './icon';
import { PrimaryButton } from './primary';
import { SecondaryButton } from './secondary';

const componentsMap = {
  primary: PrimaryButton,
  secondary: SecondaryButton,
  icon: IconButton,
  cart: CartButton,
} as const;

type ComponentsMap = typeof componentsMap;

type ButtonProps = {
  [K in keyof ComponentsMap]: React.ComponentProps<ComponentsMap[K]> & { variant: K };
}[keyof ComponentsMap];

export const Button = ({ variant, ...rest }: ButtonProps) => {
  const Component = componentsMap[variant];
  return <Component {...(rest as any)} />;
};
