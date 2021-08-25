import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 105px;
  margin-left: 63px;
  margin-right: 63px;

  @media (max-width: 768px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export default function Header() {
  return <Container>header</Container>;
}
