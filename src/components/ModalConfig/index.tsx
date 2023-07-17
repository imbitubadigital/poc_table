import React, { useCallback, useEffect, useState } from 'react';
import Modal from 'react-modal';

import * as S from './styles';

import { ModalOkProps } from './interfaces';
import { useDisplay } from '@/contexts/display';
import { useTranslation } from 'react-i18next';

export function ModalConfig({ onClose, isOpen }: ModalOkProps) {
  const { t } = useTranslation();
  const { display, settingDisplay } = useDisplay();

  const [valueWidth, setValueWidth] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!valueWidth) {
        return setError(t('config.error.empty') || '');
      }

      if (Number(valueWidth) < 1000) {
        return setError(t('config.error.minValue') || '');
      }

      settingDisplay(Number(valueWidth));
      onClose();
    },
    [onClose, settingDisplay, t, valueWidth],
  );

  const handleReset = useCallback(() => {
    settingDisplay(1380);
    onClose();
  }, [onClose, settingDisplay]);

  useEffect(() => {
    setValueWidth(String(display));
  }, [display]);

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={S.customStyles}>
      <S.ModalContainer>
        <div>
          <button type="button" className="btn-close" onClick={onClose}>
            <img src="/close.png" alt={t('config.altClose') || ''} />
          </button>
        </div>
        <S.Form onSubmit={handleSubmit}>
          <p>{t('config.title')}</p>
          <label htmlFor="input"> {t('config.label')}</label>
          <input
            id="input"
            type="number"
            min={1000}
            placeholder={t('config.inputPlaceholder') || ''}
            value={valueWidth}
            onChange={(text) => setValueWidth(text.target.value)}
          />
          <span>{error}</span>
          <div>
            <button type="button" className="reset" onClick={handleReset}>
              {t('config.btnReset')}
            </button>
            <button type="submit">{t('config.btnSave')}</button>
          </div>
        </S.Form>
      </S.ModalContainer>
    </Modal>
  );
}
