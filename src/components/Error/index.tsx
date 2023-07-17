import { useTranslation } from 'react-i18next';
import { DefaultCenter } from '../DefaultCenter';
import { ErrorProps } from './interfaces';
import * as S from './styles';

export function Error({ error }: ErrorProps) {
  const { t } = useTranslation();
  console.log('error', error);
  return (
    <DefaultCenter>
      <S.Container>
        <h3>{t(`exam.error.${error}.title`)}</h3>

        {(error === 'FAILED' || error === 'NOT_FOUND') && (
          <p>{t(`exam.error.${error}.paragraph`)}</p>
        )}
        {error === 'FAILED' && (
          <>
            <p className="label">{t(`exam.error.${error}.label`)}</p>
            <ul>
              <li>{t(`exam.error.${error}.opt1`)}</li>
              <li>{t(`exam.error.${error}.opt2`)}</li>
              <li>{t(`exam.error.${error}.opt3`)}</li>
            </ul>
          </>
        )}
        <p>{t(`exam.error.${error}.message`)}</p>
      </S.Container>
    </DefaultCenter>
  );
}
