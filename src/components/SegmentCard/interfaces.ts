import { TypeRoi } from '@/contexts/exam/interfaces';

export interface SegmentCardProps {
  reverse: boolean;
  btnTopChecked: boolean;
  btnBottomChecked: boolean;
  image: string;
  zoom: boolean;

  onZoom: () => void;

  typeRoi: TypeRoi;
  onChangeMarker: (typeBtn: string, value: boolean) => Promise<void>;

  loading: boolean;
}
