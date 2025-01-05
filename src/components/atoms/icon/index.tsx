import * as icons from '@phosphor-icons/react';
import { ThemeType, CSSProperties } from 'styled-components';
import { colorToCSSValue } from '@/utils/colorToCSSValue';

interface IconProps {
  name: keyof typeof icons;
  size?: number;
  color?: CSSProperties['color'] | keyof ThemeType['colors'];
}

export const Icon = ({ name, color, size = 22 }: IconProps) => {
  const IconComponent = icons[name] as icons.Icon;

  if (!IconComponent) return null;

  const colorValue = colorToCSSValue(color);

  return <IconComponent size={size} color={colorValue} />;
};
