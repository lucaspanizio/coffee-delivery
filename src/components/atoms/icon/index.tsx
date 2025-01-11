import * as icons from '@phosphor-icons/react';
import { ThemeType } from 'styled-components';
import { colorToCSSValue } from '@/utils/colorToCSSValue';

type IconName = keyof Omit<
  typeof icons,
  'Icon' | 'IconProps' | 'IconWeight' | 'IconContext' | 'IconBase'
>;

export interface IconProps {
  name: IconName;
  size?: icons.IconProps['size'];
  color?: keyof ThemeType['colors'];
  weight?: icons.IconWeight;
}

export const Icon = ({ name, color, weight, size = 22 }: IconProps) => {
  const IconComponent = icons[name] as icons.Icon;

  if (!IconComponent) return null;

  const colorValue = colorToCSSValue(color);

  return <IconComponent size={size} color={colorValue} weight={weight} />;
};
