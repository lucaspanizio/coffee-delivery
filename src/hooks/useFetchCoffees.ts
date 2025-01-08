import { useEffect, useState } from 'react';
import dataMock from '../../data.json';

type CoffeeProps = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  price: number;
  image: string;
};

export const useFetchCoffees = () => {
  const [coffees, setCoffees] = useState<CoffeeProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCoffees = async () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          setCoffees(dataMock.coffees);
          setIsLoading(false);
          resolve(true);
        }, 2000);
      });
    };

    fetchCoffees();
  }, []);

  return { coffees, isLoading };
};
