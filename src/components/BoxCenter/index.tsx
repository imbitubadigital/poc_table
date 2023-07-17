import { ReactNode } from 'react';
import * as S from './styles';

type BoxCenterProps = {
  children: ReactNode;
  maxWidth: number;
};

export function BoxCenter({ children, maxWidth }: BoxCenterProps) {
  return <S.Container maxWidth={maxWidth}>{children}</S.Container>;
}
