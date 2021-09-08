import { CloseButton } from 'components/CloseButton';

import * as S from './styles';

export type CardErrorProps = {
  text: string;
};

export function CardError({ text }: CardErrorProps) {
  return (
    <S.CardErrorWrapper>
      <CloseButton size='large' minimal />
      <S.Text>{text}</S.Text>
      <CloseButton size='large' minimal />
    </S.CardErrorWrapper>
  );
}

export { CardErrorWrapper } from './styles';
