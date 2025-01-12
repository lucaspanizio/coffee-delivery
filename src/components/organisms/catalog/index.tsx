import { CoffeeType } from '@/services/api/models/coffees';
import { formatCurrency } from '@/utils/formatCurrency';
import { Button } from '@/components/molecules/buttons';
import { Input } from '@/components/molecules/inputs';
import { Flex } from '@/components/atoms/flex';
import { Box } from '@/components/atoms/box';
import { Tag } from '@/components/atoms/tag';
import * as S from './styles';

interface CatalogProps {
  coffees: CoffeeType[];
}

export const Catalog = ({ coffees }: CatalogProps) => {
  return (
    <S.Wrapper>
      {coffees.map(({ image, tags, title, description, price }) => (
        <Box
          key={title}
          borderBottomLeftRadius="36px"
          borderTopRightRadius="36px"
          padding="1.5rem"
          width="16rem"
          height="19.375rem">
          <S.Image src={image} />

          <Flex
            flexDirection="column"
            alignItems="center"
            gap="0.5rem"
            paddingTop="75px"
            height="100%">
            <Flex gap="0.5rem" marginBottom="1rem">
              {tags.map((tag, index) => (
                <Tag key={index} text={tag} />
              ))}
            </Flex>

            <S.Title>{title}</S.Title>
            <S.Description>{description}</S.Description>

            <S.Footer>
              <S.Price>
                <span>R$</span>
                <span>{formatCurrency(price)}</span>
              </S.Price>

              <Flex gap="0.5rem">
                <Input variant="number" />
                <Button variant="icon" iconProps={{ name: 'ShoppingCart', weight: 'fill' }} />
              </Flex>
            </S.Footer>
          </Flex>
        </Box>
      ))}
    </S.Wrapper>
  );
};
