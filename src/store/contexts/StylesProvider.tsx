import isPropValid from '@emotion/is-prop-valid';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@/styles';
import { theme } from '@/styles/theme';

export const StylesProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
        <GlobalStyle />
        {children}
      </StyleSheetManager>
    </ThemeProvider>
  );
};
