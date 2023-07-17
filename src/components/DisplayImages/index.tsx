import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Legend } from '../Legend';
import { SegmentCard } from '../SegmentCard';
import { DisplayImagesProps } from './interfaces';
import * as S from './styles';
import { LargeCard } from '../LargeCard';
import { useExam } from '@/contexts/exam';
import { PAYLOAD_GET_EXAM } from '@/pages/Home/payload';

export function DisplayImages({
  onOpenModalInfo,
  onOpenModalConfig,
  idExam,
}: DisplayImagesProps) {
  const { t } = useTranslation();
  const { exam, getExam, loading } = useExam();
  const [selectedZoom, setSelectedZoom] = useState(-1);
  const [payload, setPayload] = useState(PAYLOAD_GET_EXAM);

  const handleZoom = useCallback((position: number) => {
    setSelectedZoom((prevState) => (prevState === position ? -1 : position));
  }, []);

  const handleOnChangeMarker = useCallback(
    async (typeBtn: string, value: boolean) => {
      const id = idExam || '';
      const newPayload = {
        ...payload,
        sop_instance_uid: id,
        [typeBtn]: value,
      };

      await getExam(newPayload);
      setPayload(newPayload);
    },
    [getExam, idExam, payload],
  );
  if (Object.keys(exam).length < 1) {
    return <div />;
  }
  const { imgRoi } = exam;
  return (
    <S.Container>
      <S.ColumnLeft>
        <S.Header>
          <span>{t('images.right')}</span>
          <span>{t('images.left')}</span>
        </S.Header>
        <S.ContainerCards>
          {imgRoi.length > 0 &&
            imgRoi.map((roi, index) => (
              <SegmentCard
                key={roi.type}
                reverse={index % 2 !== 0}
                btnTopChecked={roi.btn1}
                btnBottomChecked={roi.btn2}
                image={roi.img}
                zoom={selectedZoom === index}
                // position={index}
                typeRoi={roi.type}
                onZoom={() => handleZoom(index)}
                onChangeMarker={handleOnChangeMarker}
                loading={loading}
              />
            ))}
        </S.ContainerCards>

        <S.Footer pl={52}>
          <Legend icon="/minus_red.png" label={t('legend.scanometry')} />
          <Legend icon="/plus.png" label={t('legend.mechanicalAxis')} />
        </S.Footer>
      </S.ColumnLeft>
      <S.ColumnRight>
        <S.Header>
          <S.HeaderLeft>
            <p>AN: {exam.accessionNumber}</p>
          </S.HeaderLeft>
          <S.HeaderRight>
            <S.ButtonHelp onClick={onOpenModalInfo}>
              <img src="/help.png" alt="Configurações" />
            </S.ButtonHelp>
            <S.Separator />
            <S.ButtonHelp onClick={onOpenModalConfig}>
              <img src="/setting.png" alt="Informações" />
            </S.ButtonHelp>
          </S.HeaderRight>
        </S.Header>
        <LargeCard
          image={exam.imgFull}
          zoom={selectedZoom === 7}
          onZoom={() => handleZoom(7)}
        />
        <S.Footer pl={0}>
          <Legend icon="/minus_red.png" label={t('legend.anatomicalAxis')} />
          <Legend icon="/minus_blue.png" label={t('legend.mechanicalAxis')} />
        </S.Footer>
      </S.ColumnRight>
    </S.Container>
  );
}
