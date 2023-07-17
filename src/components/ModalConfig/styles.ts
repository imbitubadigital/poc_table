import { darken } from 'polished';
import Modal from 'react-modal';
import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 440px;
  background: ${(props) => props.theme.colors.gray700};

  @media (max-width: 440px) {
    max-width: 300px;
  }
  @media (max-width: 360px) {
    max-width: 250px;
  }

  div {
    position: relative;
    width: 100%;
    height: 10px;

    .btn-close {
      border: 0;
      background: transparent;
      position: absolute;
      top: -10px;
      right: -10px;
      img {
        width: 30px;
      }
    }
  }

  h3 {
    color: ${(props) => props.theme.colors.green300};
    font-size: 1.75rem;
  }
`;

export const Form = styled.form`
  width: 100%;
  margin-top: 1.875rem;

  p {
    font-size: 1rem;
    font-weight: 500;
    color: ${(props) => props.theme.colors.white};
    margin-top: 0.5rem;
    text-align: left;
    margin-bottom: 1.25rem;
  }

  label {
    display: block;
    color: ${(props) => props.theme.colors.white};
    margin-bottom: 0.625rem;
  }

  input {
    width: 100%;
    font-size: 0.9rem;
    height: 40px;
    background: ${(props) => props.theme.colors.gray800};
    border: 1px solid ${(props) => props.theme.colors.gray100};
    border-radius: 6px;
    color: ${(props) => props.theme.colors.gray100};
    padding: 0 0.625rem;
  }

  span {
    font-size: 0.9rem;
    color: ${(props) => props.theme.colors.red600};
    margin-top: 0.53rem;
    display: block;
  }

  div {
    display: flex;

    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-top: 1.2rem;
    height: 50px;

    button {
      background: red;
      padding: 0 30px;
      height: 44px;
      background: ${(props) => props.theme.colors.purple300};
      border: 0;
      border-radius: 8px;
      color: ${(props) => props.theme.colors.white};
      transition: 0.3s ease-in-out;
      :hover {
        background: ${(props) => darken(0.1, props.theme.colors.purple300)};
      }
    }
    .reset {
      background: yellow;
      margin-right: 20px;
      background: transparent;
      transition: 0.3s ease-in-out;
      :hover {
        background: transparent;
        color: ${(props) => darken(0.2, props.theme.colors.white)};
      }
    }
  }
`;

export const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 20,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: '#26293B',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#A2A4B1',
  },
} as Modal.Styles;
