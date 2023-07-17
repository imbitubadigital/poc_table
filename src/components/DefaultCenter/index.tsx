import { ReactNode } from 'react';
import * as S from './styles';

type DefaultCenterProps = {
  children: ReactNode;
};

export function DefaultCenter({ children }: DefaultCenterProps) {
  return <S.Container>{children}</S.Container>;
}
