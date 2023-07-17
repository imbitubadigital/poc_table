import styled from 'styled-components';

type ContainerProps = {
  maxWidth: number;
};

export const Container = styled.div<ContainerProps>`
  background-color: ${(props) => props.theme.colors.gray700};
  margin: 0 auto;
  width: 100%;
  max-width: ${(props) => props.maxWidth}px;
  padding: 1.75rem;
  border-radius: 20px;
`;
