import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 18px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.gray100};
    margin-top: 1rem;
  }
`;
