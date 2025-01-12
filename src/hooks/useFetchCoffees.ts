import { useEffect, useState } from 'react';
import { CoffeeType } from '@/services/api/models/coffees';
import { getCoffees } from '@/services/api/resources/coffees';

export const useFetchCoffees = () => {
  const [coffees, setCoffees] = useState<CoffeeType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getCoffees()
      .then((coffees) => setCoffees(coffees))
      .finally(() => setIsLoading(false));
  }, []);

  return { coffees, isLoading };
};
