import { CoffeeType } from '@/services/api/models/coffees';

export const LOCAL_STORAGE_KEY = '@coffee-delivery:cart-items';

type StorageData = Array<{
  coffee: CoffeeType;
  quantity: number;
}>;

export function useStorageCart() {
  function getItems(): StorageData | [] {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
  }

  function addItem(coffee: CoffeeType, quantity: number) {
    const prevItems = getItems();
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([...prevItems, { coffee, quantity }]));
  }

  function updateQuantityItem(id: string, quantity: number) {
    const prevItems = getItems();
    if (prevItems.length === 0) return;

    const updatedItems = prevItems.map((item) =>
      item.coffee.id === id ? { ...item, quantity } : item,
    );
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedItems));
  }

  function removeItem(id: string) {
    const prevItems = getItems();
    if (prevItems.length === 0) return;
    if (prevItems.length === 1) return localStorage.removeItem(LOCAL_STORAGE_KEY);

    const updatedItems = prevItems.filter(({ coffee: item }) => item.id !== id);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedItems));
  }

  function clear() {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  }

  return { getItems, addItem, updateQuantityItem, removeItem, clear };
}
