import { ThemeProvider } from '@/global/theme';
import { GlobalStyle } from '@/global/styles';

export function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <h1>Coffee Delivery</h1>
    </ThemeProvider>
  );
}
