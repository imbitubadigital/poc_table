import styled from 'styled-components';
import { lighten } from 'polished';

type ContainerProps = {
  reverse: boolean;
};

export const Container = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
  align-items: stretch;
  justify-content: space-between;
`;

export const Actions = styled.div`
  width: 38px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;

  @media (max-width: 1024px) {
    width: 36px;
    padding: 18px 0;
  }
`;

type BtnProps = {
  reverse: boolean;
  typeBtn: 'top' | 'bottom';
  btnChecked: boolean;
};

export const Btn = styled.button<BtnProps>`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 1;
  border: 0;
  border-top-left-radius: ${(props) => (props.reverse ? 0 : 16)}px;
  border-top-right-radius: ${(props) => (props.reverse ? 16 : 0)}px;
  border-bottom-left-radius: ${(props) => (props.reverse ? 0 : 16)}px;
  border-bottom-right-radius: ${(props) => (props.reverse ? 16 : 0)}px;
  background: ${(props) =>
    props.typeBtn === 'top'
      ? props.btnChecked
        ? props.theme.colors.red600
        : props.theme.colors.red800
      : props.btnChecked
      ? props.theme.colors.blue600
      : props.theme.colors.blue800};

  transition: background 0.3s ease-in-out;

  :hover {
    background: ${(props) =>
      props.typeBtn === 'top'
        ? props.btnChecked
          ? lighten(0.1, props.theme.colors.red600)
          : lighten(0.1, props.theme.colors.red800)
        : props.btnChecked
        ? lighten(0.1, props.theme.colors.blue600)
        : lighten(0.2, props.theme.colors.blue800)};
  }
`;

export const Separator = styled.div`
  height: 4px;
`;

interface ContentProps {
  zoom: boolean;
}

export const Content = styled.div<ContentProps>`
  flex: 1;
  border: 2px solid ${(props) => props.theme.colors.purple300};
  border-radius: 20px;
  padding: 0;
  width: 100%;
  z-index: ${(props) => (props.zoom ? 10 : 1)};
  img {
    width: 100%;
    border-radius: 18px;
    height: 100%;
    object-fit: cover;
    transition: transform 0.2s;
    transform: scale(${(props) => (props.zoom ? 1.5 : 1)});
    :hover {
      cursor: pointer;
    }
  }
`;
