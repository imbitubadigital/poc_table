import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 3.75rem;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const BoxLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const BoxRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const Logo = styled.img`
  margin-right: 40px;
  height: 40px;
`;

export const ButtonLanguage = styled.button`
  width: 45px;
  height: 45px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: 0;
`;

export const ButtonLogout = styled.button`
  width: 45px;
  height: 45px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: 0;
  img {
    width: 100%;
  }
`;

export const Separator = styled.div`
  width: 1.25rem;
  height: 10px;
`;

export const User = styled.div`
  height: 45px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  img {
    width: 36px;
  }
  p {
    margin-right: 20px;
    font-weight: 600;
    font-size: 1.125rem;
    color: ${(props) => props.theme.colors.gray100};
  }
`;
