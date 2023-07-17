import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.purple700};
  padding: 20px;

  p {
    font-size: 20px;
    color: red;
  }
`;
