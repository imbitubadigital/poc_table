import { SegmentCardProps } from './interfaces';
import * as S from './styles';
import { Eye, EyeSlash } from 'phosphor-react';
import { useTheme } from 'styled-components';

export function SegmentCard({
  reverse,
  btnTopChecked,
  btnBottomChecked,
  image = 'https://s1.1zoom.me/b5256/993/Dogs_Belgian_Puppy_Run_Shepherd_552233_600x800.jpg',
  zoom,
  loading,
  onZoom,
  typeRoi,
  onChangeMarker,
}: SegmentCardProps) {
  const { colors } = useTheme();

  return (
    <S.Container reverse={reverse}>
      <S.Actions>
        <S.Btn
          reverse={reverse}
          typeBtn="top"
          btnChecked={btnTopChecked}
          disabled={loading}
          onClick={() => onChangeMarker(`${typeRoi}_btn1`, !btnTopChecked)}
        >
          {btnTopChecked ? (
            <Eye color={colors.white} size={26} />
          ) : (
            <EyeSlash color={colors.gray100} size={26} />
          )}
        </S.Btn>
        <S.Separator />
        <S.Btn
          reverse={reverse}
          typeBtn="bottom"
          btnChecked={btnBottomChecked}
          disabled={loading}
          onClick={() => onChangeMarker(`${typeRoi}_btn2`, !btnBottomChecked)}
        >
          {btnBottomChecked ? (
            <Eye color={colors.white} size={26} />
          ) : (
            <EyeSlash color={colors.gray100} size={26} />
          )}
        </S.Btn>
      </S.Actions>
      <S.Content zoom={zoom}>
        <img src={image} alt="AAA" onClick={onZoom} />
      </S.Content>
    </S.Container>
  );
}
