import { useExam } from '@/contexts/exam';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import * as S from './styles';

export function Predictions() {
  const { t } = useTranslation();
  const { exam } = useExam();
  const copy = () => {
    const table = document.querySelector<HTMLDivElement>('#tablesPredictions');
    if (table) {
      navigator.clipboard.write([
        new ClipboardItem({
          'text/html': new Blob([table.outerHTML], { type: 'text/html' }),
        }),
      ]);
    }
  };

  const handleRenderCm = useCallback((value: number | null) => {
    if (value === null) {
      return '-';
    }
    if (value > 0) {
      return `${value} cm`;
    }
    return '0 cm';
  }, []);

  const handleRenderCmLanguage = useCallback(
    (value: number | null, orien: string) => {
      if (value === null) {
        return '-';
      }
      if (value > 0) {
        return `${value} cm (${t(`table.${orien}`)})`;
      }
      return '0 cm';
    },
    [t],
  );

  const handleRenderGradLanguage = useCallback(
    (value: number | null, orien: string) => {
      if (value === null) {
        return '-';
      }
      if (value > 0) {
        return `${value}° (${t(`table.${orien}`)})`;
      }
      return '0°';
    },
    [t],
  );

  if (Object.keys(exam).length < 1) {
    return <div />;
  }

  const { escano, angular } = exam;

  return (
    <>
      <S.BoxCopy>
        <button type="button" onClick={copy}>
          <img src="/copy.png" alt="copiar" />
          <span>{t('btn.copy')}</span>
        </button>
      </S.BoxCopy>
      <S.Container id="tablesPredictions">
        <S.BoxLeft>
          <S.BoxLeftContent>
            <S.Table>
              <thead>
                <tr>
                  <th colSpan={4}>
                    <span className="title">{t('table.scanometryTitle')}</span>
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td></td>
                  <td>
                    <span className="label">{t('table.right')}</span>
                  </td>
                  <td>
                    <span className="label">{t('table.left')}</span>
                  </td>
                  <td>
                    <span className="label">{t('table.diff')}</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="label">{t('table.thigh')}</span>
                  </td>
                  <td>
                    <span
                      className={
                        escano.tight.right !== null ? 'value' : 'valueCenter'
                      }
                    >
                      {handleRenderCm(escano.tight.right)}
                    </span>
                  </td>
                  <td>
                    <span
                      className={
                        escano.tight.left !== null ? 'value' : 'valueCenter'
                      }
                    >
                      {handleRenderCm(escano.tight.left)}
                    </span>
                  </td>
                  <td>
                    <span
                      className={
                        escano.tight.diff !== null ? 'value' : 'valueCenter'
                      }
                    >
                      {handleRenderCmLanguage(
                        escano.tight.diff,
                        escano.tight.orien,
                      )}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="label">{t('table.leg')}</span>
                  </td>
                  <td>
                    <span
                      className={
                        escano.leg.right !== null ? 'value' : 'valueCenter'
                      }
                    >
                      {handleRenderCm(escano.leg.right)}
                    </span>
                  </td>
                  <td>
                    <span
                      className={
                        escano.leg.left !== null ? 'value' : 'valueCenter'
                      }
                    >
                      {handleRenderCm(escano.leg.left)}
                    </span>
                  </td>
                  <td>
                    <span
                      className={
                        escano.leg.diff !== null ? 'value' : 'valueCenter'
                      }
                    >
                      {handleRenderCmLanguage(
                        escano.leg.diff,
                        escano.leg.orien,
                      )}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="label">{t('table.total')}</span>
                  </td>
                  <td>
                    <span
                      className={
                        escano.total.right !== null ? 'value' : 'valueCenter'
                      }
                    >
                      {handleRenderCm(escano.total.right)}
                    </span>
                  </td>
                  <td>
                    <span
                      className={
                        escano.total.left !== null ? 'value' : 'valueCenter'
                      }
                    >
                      {handleRenderCm(escano.total.left)}
                    </span>
                  </td>
                  <td>
                    <span
                      className={
                        escano.total.diff !== null ? 'value' : 'valueCenter'
                      }
                    >
                      {handleRenderCmLanguage(
                        escano.total.diff,
                        escano.total.orien,
                      )}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td colSpan={4}></td>
                </tr>
                <tr>
                  <td colSpan={3}>
                    <span className="label">
                      {t('table.femoralUnevenness')}
                    </span>
                  </td>
                  <td>
                    <span
                      className={
                        escano.desnFem.measure !== null
                          ? 'valueFooter'
                          : 'valueFooterCenter'
                      }
                    >
                      {handleRenderCmLanguage(
                        escano.desnFem.measure,
                        escano.desnFem.orien,
                      )}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td colSpan={3}>
                    <span className="label">{t('table.ankleUnevenness')}</span>
                  </td>
                  <td>
                    <span
                      className={
                        escano.desnTor.measure !== null
                          ? 'valueFooter'
                          : 'valueFooterCenter'
                      }
                    >
                      {handleRenderCmLanguage(
                        escano.desnTor.measure,
                        escano.desnTor.orien,
                      )}
                    </span>
                  </td>
                </tr>
              </tbody>
            </S.Table>
          </S.BoxLeftContent>
          <p>
            {t('legendScany.label')} <span>({t('legendScany.siglaR')})</span> ={' '}
            {t('legendScany.labelSiglaR')} /{' '}
            <span>({t('legendScany.siglaL')})</span> ={' '}
            {t('legendScany.labelSiglaL')}
          </p>
        </S.BoxLeft>
        <S.BoxRight>
          <S.BoxRightContent>
            <S.Table>
              <thead>
                <tr>
                  <th colSpan={3}>
                    <span className="title">{t('table.anglesTitle')}</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="label">{t('table.axis')}</span>
                  </td>
                  <td>
                    <span className="label">{t('table.right')}</span>
                  </td>
                  <td>
                    <span className="label">{t('table.left')}</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="label">
                      {t('table.mechanicalDegrees')}
                    </span>
                  </td>
                  <td>
                    <span
                      className={
                        angular.mecGrad.right.measure !== null
                          ? 'valueAngle'
                          : 'valueAngleCenter'
                      }
                    >
                      {handleRenderGradLanguage(
                        angular.mecGrad.right.measure,
                        angular.mecGrad.right.orien,
                      )}
                    </span>
                  </td>
                  <td>
                    <span
                      className={
                        angular.mecGrad.left.measure !== null
                          ? 'valueAngle'
                          : 'valueAngleCenter'
                      }
                    >
                      {handleRenderGradLanguage(
                        angular.mecGrad.left.measure,
                        angular.mecGrad.left.orien,
                      )}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="label">{t('table.mechanicalCm')}</span>
                  </td>
                  <td>
                    <span
                      className={
                        angular.mecCm.right.measure !== null
                          ? 'valueAngle'
                          : 'valueAngleCenter'
                      }
                    >
                      {handleRenderCmLanguage(
                        angular.mecCm.right.measure,
                        angular.mecCm.right.orien,
                      )}
                    </span>
                  </td>
                  <td>
                    <span
                      className={
                        angular.mecCm.left.measure !== null
                          ? 'valueAngle'
                          : 'valueAngleCenter'
                      }
                    >
                      {handleRenderCmLanguage(
                        angular.mecCm.left.measure,
                        angular.mecCm.left.orien,
                      )}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="label">{t('table.anatomical')}</span>
                  </td>
                  <td>
                    <span
                      className={
                        angular.anatomic.right.measure !== null
                          ? 'valueAngle'
                          : 'valueAngleCenter'
                      }
                    >
                      {handleRenderGradLanguage(
                        angular.anatomic.right.measure,
                        angular.anatomic.right.orien,
                      )}
                    </span>
                  </td>
                  <td>
                    <span
                      className={
                        angular.anatomic.left.measure !== null
                          ? 'valueAngle'
                          : 'valueAngleCenter'
                      }
                    >
                      {handleRenderGradLanguage(
                        angular.anatomic.left.measure,
                        angular.anatomic.left.orien,
                      )}
                    </span>
                  </td>
                </tr>
              </tbody>
            </S.Table>
          </S.BoxRightContent>
        </S.BoxRight>
      </S.Container>
    </>
  );
}
