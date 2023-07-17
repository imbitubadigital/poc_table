import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
`;

interface ContentProps {
  zoom: boolean;
}

export const Content = styled.div<ContentProps>`
  display: flex;
  border: 2px solid ${(props) => props.theme.colors.green300};
  border-radius: 20px;
  padding: 0;
  width: 100%;
  z-index: ${(props) => (props.zoom ? 200000 : 1)};
  img {
    width: 100%;
    border-radius: 18px;
    height: 100%;
    object-fit: cover;
    transition: transform 0.2s;
    transform: scale(${(props) => (props.zoom ? 1.2 : 1)});

    :hover {
      cursor: pointer;
    }
  }
`;
