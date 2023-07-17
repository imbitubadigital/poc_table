import { LegendProps } from './interfaces';
import * as S from './styles';

export function Legend({ icon, label }: LegendProps) {
  return (
    <S.Container>
      <img src={icon} alt={label} />
      <span>{label}</span>
    </S.Container>
  );
}
