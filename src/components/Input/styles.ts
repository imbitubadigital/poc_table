import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  border-radius: 12px;
  padding: 12px 16px;
  width: 100%;
  background: ${(props) => props.theme.colors.gray700};
  margin-bottom: 6px;
  input {
    width: 100%;
    border: 0;
    background: ${(props) => props.theme.colors.gray700};
    font-size: 16px;
    font-weight: 600;
    border: 0;
    outline: none;
    color: ${(props) => props.theme.colors.white};
    &::-webkit-datatime-edit-fields-wrapper {
      font-size: 16px;
      color: ${(props) => props.theme.colors.white};
      font-family: 'Montserrat', sans-serif;
    }
    &::placeholder {
      font-size: 16px;
      color: ${(props) => props.theme.colors.gray100};
      opacity: 1;
    }
    :-ms-input-placeholder {
      color: ${(props) => props.theme.colors.gray100};
    }
    ::-ms-input-placeholder {
      color: ${(props) => props.theme.colors.gray100};
    }
    :-webkit-autofill {
      background-color: ${(props) => props.theme.colors.gray700};
      -webkit-text-fill-color: ${(props) => props.theme.colors.white};
      transition: background-color 5000s ease-in-out 0s;
    }
  }
`;

export const ContainerIcon = styled.div`
  margin-left: 20px;
  img {
    width: 44px;
  }
`;

export const ContainerError = styled.div`
  min-height: 24px;
`;
