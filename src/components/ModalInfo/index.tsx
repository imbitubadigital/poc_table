import React from 'react';
import Modal from 'react-modal';

import * as S from './styles';

import { ModalOkProps } from './interfaces';
import { useTranslation } from 'react-i18next';

export function ModalInfo({ onClose, isOpen }: ModalOkProps) {
  const { t } = useTranslation();
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={S.customStyles}>
      <S.ModalContainer>
        <div>
          <button type="button" onClick={onClose}>
            <img src="/close.png" alt={t('help.close') || ''} />
          </button>
        </div>
        <h3>{t('help.title')}</h3>
        <p>{t('help.paragraph1')}</p>
        <p>{t('help.paragraph2')}</p>
        <p>{t('help.paragraph3')}</p>
        <p>{t('help.paragraph4')}</p>
      </S.ModalContainer>
    </Modal>
  );
}
