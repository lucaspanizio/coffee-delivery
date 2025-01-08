import { ThemeProvider } from '@/global/theme';
import { GlobalStyle } from '@/global/styles';
import { AppRoutes } from '@/routes';

export function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  );
}
