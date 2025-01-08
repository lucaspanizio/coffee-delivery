import { formatCurrency } from '@/utils/formatCurrency';
import { Button } from '@/components/molecules/buttons';
import { Input } from '@/components/molecules/inputs';
import { Box } from '@/components/atoms/box';
import { Tag } from '@/components/atoms/tag';
import * as S from './styles';

interface CardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  price: number;
}

export const Card = ({ title, description, image, price, tags }: CardProps) => {
  return (
    <Box
      borderBottomLeftRadius="36px"
      borderTopRightRadius="36px"
      padding="1.5rem"
      width="16rem"
      height="19.375rem">
      <S.Image src={image} />

      <S.Content>
        <S.TagsWrapper>
          {tags.map((tag, index) => (
            <Tag key={index} text={tag} />
          ))}
        </S.TagsWrapper>

        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>

        <S.Footer>
          <S.Price>
            <span>R$</span>
            <span>{formatCurrency(price)}</span>
          </S.Price>

          <S.Actions>
            <Input variant="number" />
            <Button variant="icon" iconProps={{ name: 'ShoppingCart', weight: 'fill' }} />
          </S.Actions>
        </S.Footer>
      </S.Content>
    </Box>
  );
};
