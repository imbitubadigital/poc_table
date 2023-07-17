import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BoxTable = styled.div`
  padding: 20px;
  /* background: #ccc; */
  position: relative;
`;
export const Spave = styled.div`
  background: red;
  height: 40px;
`;

export const Box = styled.div`
  width: 100%;
  max-width: 600px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 30px;
  background: #fff;
  position: relative;
  &::before {
    content: '';
    width: 260px;
    height: 100px;
    position: absolute;
    bottom: -14px;
    left: 6px;
    transform: rotate(-7deg);
    border-bottom-left-radius: 7px;
    z-index: -2;
    background: linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.003),
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.8)
    );
    filter: blur(2px);
  }
  &::after {
    content: '';
    width: 260px;
    height: 100px;
    background: yellow;
    position: absolute;
    bottom: -14px;
    right: 6px;
    transform: rotate(7deg);
    border-bottom-right-radius: 7px;
    z-index: -2;
    background: linear-gradient(
      -45deg,
      rgba(0, 0, 0, 0.003),
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.8)
    );
    filter: blur(2px);
  }
`;

export const Txt = styled.p``;
