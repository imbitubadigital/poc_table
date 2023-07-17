import { BoxCenter } from '@/components/BoxCenter';
import { DisplayImages } from '@/components/DisplayImages';
import { Loading } from '@/components/Loading';
import { ModalConfig } from '@/components/ModalConfig';
import { ModalInfo } from '@/components/ModalInfo';
import { Predictions } from '@/components/Predictions';
import { useDisplay } from '@/contexts/display';
import { useExam } from '@/contexts/exam';
import { PayloadGetExam } from '@/contexts/exam/interfaces';
import { useCallback, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { PAYLOAD_GET_EXAM } from './payload';
import * as S from './styles';
import { Error } from '@/components/Error';
import { Header } from '@/components/Header';

export function Home() {
  const { display } = useDisplay();
  const { t } = useTranslation();
  const { error, loading, getExam, exam } = useExam();
  const [showModalInfo, setShowModalInfo] = useState(false);
  const [showModalConfig, setShowModalConfig] = useState(false);
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  const handleShowModalConfig = useCallback(() => {
    setShowModalConfig(true);
  }, []);

  const handleGetExam = useCallback(
    async (payload: PayloadGetExam) => {
      await getExam(payload);
    },
    [getExam],
  );

  useEffect(() => {
    const payloadGet = {
      ...PAYLOAD_GET_EXAM,
      sop_instance_uid: id,
    };

    handleGetExam(payloadGet);
  }, [handleGetExam, id]);

  return (
    <>
      <Helmet>
        <title>{t('title')}</title>
      </Helmet>
      <Header />
      <S.Container>
        {loading && Object.keys(exam).length < 1 ? (
          <Loading />
        ) : (
          <>
            {error ? (
              <Error error={error} />
            ) : (
              <BoxCenter maxWidth={display}>
                <DisplayImages
                  onOpenModalInfo={() => setShowModalInfo(true)}
                  onOpenModalConfig={handleShowModalConfig}
                  idExam={id}
                />
                <Predictions />
              </BoxCenter>
            )}
          </>
        )}
      </S.Container>

      <ModalInfo
        isOpen={showModalInfo}
        onClose={() => setShowModalInfo(false)}
      />
      <ModalConfig
        isOpen={showModalConfig}
        onClose={() => setShowModalConfig(false)}
      />
    </>
  );
}
