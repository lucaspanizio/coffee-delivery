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
  background?: keyof ThemeType['colors'];
  weight?: icons.IconWeight;
}

export const Icon = ({ name, color, background, weight, size = 22 }: IconProps) => {
  const IconComponent = icons[name] as icons.Icon;

  if (!IconComponent) return null;

  const colorValue = colorToCSSValue(color);

  const backgroundStyle = background && {
    background: colorToCSSValue(background),
    padding: calculatePadding(size),
    borderRadius: '50%',
  };

  return <IconComponent size={size} color={colorValue} weight={weight} style={backgroundStyle} />;
};

function calculatePadding(size?: string | number) {
  if (!size) return undefined;
  if (typeof size === 'number') return size / 4;

  if (typeof size === 'string') {
    if (size.includes('px')) return `${parseFloat(size) / 4}px`;
    if (size.includes('rem')) return `${(parseFloat(size) * 16) / 4}px`;
  }

  return undefined;
}
