import React from 'react';

import * as S from './styles';
import { Load } from '@/components/Load';

export function Study() {
  return (
    <S.Container>
      <S.Box>
        <Load />
      </S.Box>
    </S.Container>
  );
}
