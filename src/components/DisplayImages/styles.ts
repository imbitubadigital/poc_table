import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const ColumnLeft = styled.div`
  flex-basis: 54%;
  min-height: 400px;
`;

export const ColumnRight = styled.div`
  flex-basis: 44%;
  min-height: 400px;
`;

export const Header = styled.div`
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  span {
    font-size: 18px;
    color: ${(props) => props.theme.colors.white};
    font-weight: 600;
    text-align: center;
    flex: 1;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  p {
    margin-right: 20px;
    font-weight: 600;
    font-size: 1.125rem;
    color: ${(props) => props.theme.colors.gray100};
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const ButtonHelp = styled.button`
  width: 45px;
  height: 45px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: 0;
`;

export const Separator = styled.div`
  width: 1.25rem;
  height: 10px;
`;

export const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.8rem;
  grid-auto-rows: max-content;
`;

type FooterProps = {
  pl: number;
};

export const Footer = styled.div<FooterProps>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  align-items: center;
  padding-left: ${(props) => props.pl}px;
  margin-top: 1.25rem;
`;
