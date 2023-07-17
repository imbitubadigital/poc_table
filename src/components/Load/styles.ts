import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 100px;
  background: #03254c;
  border-radius: 10px;
  border-bottom-right-radius: 0;
`;

export const bounceAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(0.6);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;
type AnimationDelayProps = {
  animationDelay: string;
};
export const Bounce = styled.div<AnimationDelayProps>`
  width: 12px;
  height: 12px;
  margin: 0 4px;
  border-radius: 50%;
  background-color: #f1f1f1;
  animation: ${bounceAnimation} 1.4s infinite ease-in-out;
  animation-delay: ${(props) => props.animationDelay};
`;
