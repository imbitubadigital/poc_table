import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 1rem;
`;
export const BoxLeft = styled.div`
  flex-basis: 47%;

  p {
    font-size: 18px;
    font-weight: 600;
    margin-top: 10px;
    color: ${(props) => props.theme.colors.gray100};
    span {
      color: ${(props) => props.theme.colors.white};
    }
  }
`;

export const BoxLeftContent = styled.div`
  //flex-basis: 47%;
  background: ${(props) => props.theme.colors.gray800};
  border-radius: 16px;
  border: 2px solid ${(props) => props.theme.colors.purple300};
  padding: 16px 20px;
  .title {
    font-weight: 600;
    font-size: 32px;
    color: ${(props) => props.theme.colors.purple300};
    display: block;
    text-align: left;
  }
  .label {
    font-weight: 500;
    color: ${(props) => props.theme.colors.gray100};
    font-size: 20px;
    display: block;
    text-align: left;
  }
  .value {
    font-weight: 600;
    font-size: 20px;
    color: ${(props) => props.theme.colors.white};
    display: block;
    text-align: left;
  }

  .valueCenter {
    font-weight: 600;
    font-size: 20px;
    color: ${(props) => props.theme.colors.white};
    display: block;
    text-align: center;
  }

  .valueFooter {
    font-weight: 600;
    font-size: 20px;
    color: ${(props) => props.theme.colors.white};
    display: block;
    text-align: left;
  }

  .valueFooterCenter {
    font-weight: 600;
    font-size: 20px;
    color: ${(props) => props.theme.colors.white};
    display: block;
    text-align: center;
  }
`;

export const BoxRight = styled.div`
  flex-basis: 49%;
`;

export const BoxRightContent = styled.div`
  background: ${(props) => props.theme.colors.gray800};
  border-radius: 16px;
  border: 2px solid ${(props) => props.theme.colors.green300};
  padding: 16px 20px;
  .title {
    font-weight: 600;
    font-size: 32px;
    color: ${(props) => props.theme.colors.green300};
    display: block;
    text-align: left;
  }
  .label {
    font-weight: 500;
    color: ${(props) => props.theme.colors.gray100};
    font-size: 20px;
    display: block;
    text-align: left;
  }

  .labelCenter {
    font-weight: 500;
    color: ${(props) => props.theme.colors.gray100};
    font-size: 20px;
    display: block;
    text-align: center;
  }

  .valueAngle {
    font-weight: 600;
    font-size: 20px;
    color: ${(props) => props.theme.colors.white};
    display: block;
    text-align: left;
  }

  .valueAngleCenter {
    font-weight: 600;
    font-size: 20px;
    color: ${(props) => props.theme.colors.white};
    display: block;
    text-align: center;
  }

  .valueFooter {
    font-weight: 600;
    font-size: 20px;
    color: ${(props) => props.theme.colors.white};
    display: block;
    text-align: center;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: none;
  th,
  td {
    padding: 0.7rem 0.5rem;
    text-align: center;
    border: none;
    vertical-align: middle;
  }
  th {
    font-weight: bold;
    border: none;
  }
  td {
    border: none;
  }
  tr:first-child th {
    border-top: none;
  }
  td:first-child {
    text-align: left;
  }
  tr:nth-child(even) td {
    /* background-color: #f2f2f2; */
  }
  @media screen and (max-width: 768px) {
    th,
    td {
      display: block;
      width: 100%;
      text-align: left;
    }
    td {
      border-top: none;
      border-left: none;
      border-right: none;
      padding: 0.25rem;
      margin-bottom: 0.25rem;
    }
    td:before {
      content: attr(data-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
`;

export const BoxCopy = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  margin-top: 3.5rem;

  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 0;

    transition: transform 0.2s ease-in-out;

    :hover {
      span {
        color: ${(props) => props.theme.colors.white};
      }
    }

    &:active {
      transform: scale(1.2);
    }

    img {
      width: 34px;
      margin-right: 0.8rem;
    }
    span {
      font-size: 1rem;
      font-weight: 600;
      color: ${(props) => props.theme.colors.gray100};
      display: block;

      transition: color 0.2s ease-in-out;
    }
  }
`;
