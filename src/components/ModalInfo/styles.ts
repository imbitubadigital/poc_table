import Modal from 'react-modal';
import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 600px;
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

    button {
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
    color: ${(props) => props.theme.colors.purple300};
    font-size: 1.75rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  p {
    font-size: 1rem;
    font-weight: 500;
    color: ${(props) => props.theme.colors.white};
    margin-top: 1rem;
    text-align: left;
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
