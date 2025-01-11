import { ThemeProvider } from '@/styles/theme';
import { GlobalStyle } from '@/styles';
import { AppRoutes } from '@/routes';

export function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  );
}
