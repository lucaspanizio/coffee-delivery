import { CSSProperties, ThemeType } from 'styled-components';
import { theme } from '@/global/theme';

type Color = CSSProperties['color'] | keyof ThemeType['colors'];

/**
 * Converte uma `color` em um valor CSS suportado.
 *
 * @param {Color} color - O valor da cor, que pode ser uma string válida, uma chave de tema ou uma propriedade CSS para cor.
 * @returns {string | undefined} - Retorna o valor da cor em formato CSS ou `undefined` se a cor não for suportada.
 *
 * @example
 * ```ts
 * colorToCSSValue('primary'); // Retorna o valor correspondente à cor 'primary' do tema.
 * colorToCSSValue('#ff5733'); // Retorna '#ff5733' pois é um valor CSS válido.
 * colorToCSSValue('white');   // Retorna 'white' pois é um valor CSS válido.
 * colorToCSSValue('preto');   // Retorna undefined pois NÃO é um valor CSS válido.
 * ```
 */
export const colorToCSSValue = (color: Color): string | undefined => {
  if (typeof color === 'string' && color in theme.colors) {
    return theme.colors[color as keyof Color];
  }

  if (typeof color === 'string') {
    const isCSSColor = CSS.supports('color', color);
    return isCSSColor ? color : theme.colors.white;
  }
};
