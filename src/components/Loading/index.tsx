import { DefaultCenter } from '../DefaultCenter';
import * as S from './styles';
import { Spinner } from 'phosphor-react';
import { useTheme } from 'styled-components';

export function Loading() {
  const { colors } = useTheme();
  return (
    <DefaultCenter>
      <S.Container>
        <Spinner color={colors.white} size={80} className="spinner" />
        <p>Aguarde, carregando os dados...</p>
      </S.Container>
    </DefaultCenter>
  );
}
