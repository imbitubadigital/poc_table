import React from 'react';

import * as S from './styles';

// import {} from './interfaces';

export function Load() {
  return (
    <S.Container>
      <S.Bounce animationDelay="0s" />
      <S.Bounce animationDelay=".2s" />
      <S.Bounce animationDelay=".4s" />
    </S.Container>
  );
}
