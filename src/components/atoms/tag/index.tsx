import * as S from './styles';

interface TagProps {
  text: string;
}

export const Tag = ({ text }: TagProps) => {
  return <S.Tag>{text}</S.Tag>;
};
