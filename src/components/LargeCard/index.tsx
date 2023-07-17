import { CardProps } from './interfaces';
import * as S from './styles';

export function LargeCard({ image, zoom, onZoom }: CardProps) {
  return (
    <S.Container>
      <S.Content zoom={zoom}>
        <img src={image} alt="escano_completa" onClick={onZoom} />
      </S.Content>
    </S.Container>
  );
}
