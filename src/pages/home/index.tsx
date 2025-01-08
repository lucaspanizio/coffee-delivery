import { Fragment } from 'react';
import { useFetchCoffees } from '@/hooks/useFetchCoffees';
import { Highlights } from '@/components/molecules/highlights';
import { Card } from '@/components/organisms/card';
import * as S from './styles';

export const Home = () => {
  const { coffees } = useFetchCoffees();

  return (
    <Fragment>
      <S.FirstSection>
        <header>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h4>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h4>
          </div>
          <Highlights />
        </header>
        <img
          src="images/brand/hero.svg"
          alt="Copo de café branco com tampa preta e estampa preta com a logomarca branca. O copo está ligeiramente inclinado para a direita. Há grãos, pó e folhas de café ao redor do copo."
        />
      </S.FirstSection>

      <S.SecoundSection>
        <h2>Nossos cafés</h2>

        <S.CardList>
          {coffees.map((coffee) => (
            <Card
              key={coffee.id}
              title={coffee.title}
              description={coffee.description}
              tags={coffee.tags}
              image={coffee.image}
              price={coffee.price}
            />
          ))}
        </S.CardList>
      </S.SecoundSection>
    </Fragment>
  );
};
