import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 3.125rem 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 1.25rem auto;
  padding: 1.25rem;
  max-width: 37.5rem;
`;

export const Logo = styled.img`
  width: 140px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerForgot = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin: 1rem 0 2.5rem;
  a {
    font-weight: 600;
    font-size: 18px;
    color: ${(props) => props.theme.colors.gray100};
    transition: 0.3s ease-in-out;
    :hover {
      color: ${(props) => props.theme.colors.white};
    }
  }
`;

export const GeneralError = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 60px;
  margin: 1.5rem 0;
`;

export const Btn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s;
  border: 0;
  background: transparent;

  img {
  }
  span {
    font-weight: 600;
    font-size: 1.125rem;
    color: ${(props) => props.theme.colors.gray100};
  }
  :hover {
    transform: scale(1.2);
    span {
      color: ${(props) => props.theme.colors.white};
    }
  }
`;

export const ContainerSpinner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 40px;
`;
