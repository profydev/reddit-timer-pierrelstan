import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
// eslint-disable-next-line import/prefer-default-export
export const Rotate = styled.div`
display:flex;
justify-content:center;
&:after {
content:'';
border: 5px solid #ffffff;
border-top: 5px solid #FEB756;
border-left: 5px solid #FEB756;
border-right: 5px solid #FEB756;
border-radius: 50%;
width: 60px;
height: 60px;
animation: ${rotate} 1.5s linear infinite;
}`;
