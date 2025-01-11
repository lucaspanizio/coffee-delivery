import { ReactNode } from 'react';
import { css, ThemeProvider as ThemeProviderSC } from 'styled-components';

export const theme = {
  colors: {
    yellow: '#DBAC2C',
    'yellow-light': '#F1E9C9',
    'yellow-dark': '#C47F17',
    'purple-dark': '#4B2995',
    purple: '#8047F8',
    'purple-light': '#EBE5F9',
    'base-title': '#272221',
    'base-subtitle': '#403937',
    'base-text': '#574F4D',
    'base-label': '#8D8686',
    'base-hover': '#D7D5D5',
    'base-button': '#E6E5E5',
    'base-input': '#EDEDED',
    'base-card': '#F3F2F2',
    background: '#FAFAFA',
    white: '#FFFFFF',
  },
  fonts: {
    titleXL: css`
      font-family: 'Baloo 2', sans-serif;
      font-size: 3rem;
      line-height: 130%;
      font-weight: 800;
    `,
    titleL: css`
      font-family: 'Baloo 2', sans-serif;
      font-size: 2rem;
      line-height: 130%;
      font-weight: 800;
    `,
    titleM: css`
      font-family: 'Baloo 2', sans-serif;
      font-size: 1.5rem;
      line-height: 130%;
      font-weight: 800;
    `,
    titleS: css`
      font-family: 'Baloo 2', sans-serif;
      font-size: 1.25rem;
      line-height: 130%;
      font-weight: 700;
    `,
    titleXS: css`
      font-family: 'Baloo 2', sans-serif;
      font-size: 1.125rem;
      line-height: 130%;
      font-weight: 700;
    `,
    textL: css`
      font-family: 'Roboto', sans-serif;
      font-size: 1.25rem;
      line-height: 130%;
      font-weight: 400;
    `,
    textM: css`
      font-family: 'Roboto', sans-serif;
      font-size: 1rem;
      line-height: 130%;
      font-weight: 400;
    `,
    textS: css`
      font-family: 'Roboto', sans-serif;
      font-size: 0.875rem;
      line-height: 130%;
      font-weight: 400;
    `,
    textXS: css`
      font-family: 'Roboto', sans-serif;
      font-size: 0.75rem;
      line-height: 130%;
      font-weight: 700;
    `,
    textBoldL: css`
      font-family: 'Roboto', sans-serif;
      font-size: 1.25rem;
      line-height: 130%;
      font-weight: 700;
    `,
    textBoldM: css`
      font-family: 'Roboto', sans-serif;
      font-size: 1rem;
      line-height: 130%;
      font-weight: 700;
    `,
    tag: css`
      font-family: 'Roboto', sans-serif;
      font-size: 0.625rem;
      line-height: 130%;
      font-weight: 700;
    `,
    buttonG: css`
      font-family: 'Roboto', sans-serif;
      font-size: 0.875rem;
      line-height: 160%;
      font-weight: 700;
    `,
    buttonM: css`
      font-family: 'Roboto', sans-serif;
      font-size: 0.75rem;
      line-height: 160%;
      font-weight: 400;
    `,
  },
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return <ThemeProviderSC theme={theme}>{children}</ThemeProviderSC>;
};
