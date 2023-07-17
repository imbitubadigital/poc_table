import styled from 'styled-components';

type ErrorTypeLabel = { errorLabel: 'small' | 'large' };

export const Error = styled.p<ErrorTypeLabel>`
  font-weight: 600;
  color: ${(props) => props.theme.colors.red600};
  font-size: ${(props) => (props.errorLabel === 'small' ? '14px' : '18px')};
`;
