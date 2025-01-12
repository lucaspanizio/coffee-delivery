import isPropValid from '@emotion/is-prop-valid';
import { StyleSheetManager } from 'styled-components';
import { ThemeProvider } from '@/styles/theme';
import { GlobalStyle } from '@/styles';
import { AppRoutes } from '@/routes';

export function App() {
  return (
    <ThemeProvider>
      <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
        <GlobalStyle />
        <AppRoutes />
      </StyleSheetManager>
    </ThemeProvider>
  );
}
