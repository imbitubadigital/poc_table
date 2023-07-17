import { ReactNode } from 'react';

export type ChildrenData = {
  children: ReactNode;
};

export type TypeRoi = 'LH' | 'RH' | 'LK' | 'RK' | 'LA' | 'RA';

export interface ImgRoiProps {
  type: TypeRoi;
  img: string;
  btn1: boolean;
  btn2: boolean;
}

type OrienType = 'R' | 'L' | '-';

export interface ItemEscanoProps {
  right: number | null;
  left: number | null;
  diff: number | null;
  orien: OrienType;
}

export interface DisnProps {
  measure: number;
  orien: OrienType;
}

export interface EscanoProps {
  leg: ItemEscanoProps;
  tight: ItemEscanoProps;
  total: ItemEscanoProps;
  desnFem: DisnProps;
  desnTor: DisnProps;
}

export interface RightLeftProps {
  measure: number;
  orien: string;
}

export interface MecGradMecCmProps {
  right: RightLeftProps;
  left: RightLeftProps;
}

export interface AnatomicRightLeftProps {
  right: RightLeftProps;
  left: RightLeftProps;
}

export interface AngularProps {
  mecGrad: MecGradMecCmProps;
  mecCm: MecGradMecCmProps;
  anatomic: AnatomicRightLeftProps;
}

export interface ExamProps {
  accessionNumber: string;
  imgFull: string;
  imgRoi: ImgRoiProps[];
  escano: EscanoProps;
  angular: AngularProps;
}

export interface PayloadGetExam {
  sop_instance_uid: string | null;
  LH_btn1: boolean;
  LH_btn2: boolean;
  RH_btn1: boolean;
  RH_btn2: boolean;
  LK_btn1: boolean;
  LK_btn2: boolean;
  RK_btn1: boolean;
  RK_btn2: boolean;
  LA_btn1: boolean;
  LA_btn2: boolean;
  RA_btn1: boolean;
  RA_btn2: boolean;
}

export interface ExamContextData {
  loading: boolean;
  error: string | null;
  exam: ExamProps;
  getExam: (payload: PayloadGetExam) => Promise<void>;
}
