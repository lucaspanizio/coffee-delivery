import * as icons from '@phosphor-icons/react';
import { IconWeight } from '@phosphor-icons/react';
import { ThemeType } from 'styled-components';
import { colorToCSSValue } from '@/utils/colorToCSSValue';

export interface IconProps {
  name: keyof typeof icons;
  size?: number;
  weight?: IconWeight;
  color?: keyof ThemeType['colors'];
}

export const Icon = ({ name, color, weight, size = 22 }: IconProps) => {
  const IconComponent = icons[name] as icons.Icon;

  if (!IconComponent) return null;

  const colorValue = colorToCSSValue(color);

  return <IconComponent size={size} color={colorValue} weight={weight} />;
};
