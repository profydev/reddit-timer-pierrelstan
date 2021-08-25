import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
const NavListLink = styled(Link)`
  color: ${(props) => props.theme.color.text};
  padding-left: 26px;
  text-decoration: none;
  color: ${(props) => props.theme.color.text};
`;
const NavListItem = styled(Link)`
  text-decoration: none;
`;
const NavBar = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  @media (max-width: 768px) {
    display: none;
  }
`;

export default function Header() {
  return (
    <Container>
      <NavBar>
        <NavListItem>
          <NavListLink to="/search">Search</NavListLink>
        </NavListItem>
        <NavListItem>
          <NavListLink to="/#how-it-works">How it works</NavListLink>
        </NavListItem>
        <NavListItem>
          <NavListLink to="/#about">About</NavListLink>
        </NavListItem>
      </NavBar>
    </Container>
  );
}
