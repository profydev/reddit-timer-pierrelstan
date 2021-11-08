import styled, { keyframes } from 'styled-components';
import { ReactComponent as unStyledSpinner } from './loading-spinner.svg';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const LoadingSpinner = styled(unStyledSpinner)`
animation: ${rotate} 1.5s linear infinite;
}`;

export const Container = styled.div``;

export const LoadingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 56px;
`;
export const ErrorContainer = styled.p`
text-align:center;
padding: 30px;
color: red;
font-size: ${(props) => props.theme.font.size.small};`;
