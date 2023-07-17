import { ErrorLabelProps } from './interface';
import * as S from './styles';

export function ErrorLabel({ error, type = 'small' }: ErrorLabelProps) {
  return <S.Error errorLabel={type}>{error}</S.Error>;
}
