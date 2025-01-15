import { ToastContainer } from 'react-toastify';
import { StylesProvider } from '@/store/contexts/StylesProvider';
import { CartProvider } from '@/store/contexts/CartProvider';
import { AppRoutes } from '@/routes';

export function App() {
  return (
    <StylesProvider>
      <CartProvider>
        <AppRoutes />
      </CartProvider>
      <ToastContainer />
    </StylesProvider>
  );
}
