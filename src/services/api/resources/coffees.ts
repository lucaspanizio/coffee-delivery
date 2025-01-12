import dataMock from '../../../../data.json';
import { CoffeeType } from '../models/coffees';

export const getCoffees = async () => {
  return new Promise<CoffeeType[]>((resolve) => {
    setTimeout(() => {
      resolve(dataMock.coffees);
    }, 500);
  });
};
