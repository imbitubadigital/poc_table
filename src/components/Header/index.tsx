import { useAuth } from '@/contexts/auth';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as S from './styles';
import { getLanguage, settingLanguage } from '@/utils/storage';

export function Header() {
  const { singOut, data } = useAuth();
  const {
    i18n: { changeLanguage, language },
  } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState(() => {
    const storageLng = getLanguage();
    if (!storageLng) return language;

    const lngParse = JSON.parse(storageLng);
    changeLanguage(lngParse.lng);
    return lngParse.lng;
  });

  const handleChangeLanguage = (newLanguage: 'en' | 'pt') => {
    changeLanguage(newLanguage);

    setCurrentLanguage(newLanguage);
    settingLanguage(newLanguage);
  };

  return (
    <S.Container>
      <S.BoxLeft>
        <S.Logo src="/logo-mini.png" alt="Logo do Projeto" />
        <S.ButtonLanguage onClick={() => handleChangeLanguage('pt')}>
          <img
            src={currentLanguage === 'pt' ? '/br.png' : '/br_disable.png'}
            alt="Português"
          />
        </S.ButtonLanguage>
        <S.Separator />
        <S.ButtonLanguage onClick={() => handleChangeLanguage('en')}>
          <img
            src={currentLanguage === 'en' ? '/usa.png' : '/usa_disable.png'}
            alt="Inglês"
          />
        </S.ButtonLanguage>
      </S.BoxLeft>
      <S.BoxRight>
        <S.User>
          <p>{data?.email}</p>
          <img src="/user.png" alt="E-mail do usuário" />
        </S.User>
        <S.Separator />
        <S.ButtonLogout onClick={() => singOut()}>
          <img src="/logout.png" alt="Sair" />
        </S.ButtonLogout>
      </S.BoxRight>
    </S.Container>
  );
}
