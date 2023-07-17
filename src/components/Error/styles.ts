import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.gray700};
  border: 1px solid ${(props) => props.theme.colors.gray100};
  width: 100%;
  max-width: 37.5rem;
  border-radius: 16px;
  padding: 2rem;

  h3 {
    color: ${(props) => props.theme.colors.purple300};
    font-size: 1.75rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
    text-align: center;
  }

  p {
    font-size: 18px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.white};
    margin-top: 1.5rem;
    text-align: left;
    width: 100%;
  }

  .label {
    text-align: left;

    width: 100%;

    margin-top: 1.5rem;
  }
  span {
    font-size: 14px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.white};
    margin-top: 1.5rem;
    display: block;
    text-align: center;
    display: block;
  }

  ul {
    width: 100%;
    margin-bottom: 1rem;

    li {
      font-size: 16px;
      font-weight: 600;
      color: ${(props) => props.theme.colors.white};
      margin-top: 1rem;
      text-align: left;
      list-style-type: disc;
      list-style: inside;
    }
  }
`;
