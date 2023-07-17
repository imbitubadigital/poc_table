import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-right: 3.5rem;

  img {
    margin-right: 1rem;
  }
  span {
    font-size: 1.125rem;
    font-weight: 600px;
    color: ${(props) => props.theme.colors.gray100};
  }
`;
