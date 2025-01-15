import { createContext, useMemo, useState } from 'react';
import { CoffeeType } from '@/services/api/models/coffees';
import { useStorageCart } from '@/hooks/useStorageCart';

type CartState = {
  coffee: CoffeeType;
  quantity: number;
}[];

type TotalPrices = {
  items: number;
  deliveryTax: number;
  grandTotal: number;
};

interface CartContextProps {
  cartItems?: CartState;
  numberOfItems: number;
  totalPrices: TotalPrices;
  addToCart: (coffee: CoffeeType, quantity?: number) => void;
  updateQuantity: (id: string, step: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const storage = useStorageCart();

  const [cartItems, setCartItems] = useState<CartState>(() => storage.getItems());

  const numberOfItems = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }, [cartItems]);

  const totalPrices = useMemo(() => {
    const items = cartItems.reduce((acc, item) => acc + item.quantity * item.coffee?.price, 0);
    const deliveryTax = 3.5 * Number(numberOfItems > 0); // valor fixo de frete
    return {
      items,
      deliveryTax,
      grandTotal: items + deliveryTax,
    };
  }, [cartItems]);

  function addToCart(coffee: CoffeeType, quantity = 1) {
    if (cartItems?.some(({ coffee: item }) => item.id === coffee.id)) return;
    setCartItems((state) => [...state, { coffee, quantity }]);
    storage.addItem(coffee, quantity);
  }

  function removeFromCart(id: string) {
    setCartItems((state) => state.filter(({ coffee }) => coffee.id !== id));
    storage.removeItem(id);
  }

  function clearCart() {
    setCartItems([]);
    storage.clear();
  }

  const updateQuantity = (id: string, step: number) => {
    setCartItems((state) => {
      return state.map((item) => {
        if (item.coffee.id !== id) return item;

        const newQuantity = Math.max(item.quantity + step, 1);
        storage.updateQuantityItem(id, newQuantity);
        return { ...item, quantity: newQuantity };
      });
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalPrices,
        numberOfItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}>
      {children}
    </CartContext.Provider>
  );
};
