import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import IconLogoSvg from '../utils/IconLogoSvg';

const Container = styled.header`
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 105px;
  margin: 0 80px;

  @media (max-width: 768px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`;
const NavListLink = styled(Link)`
  color: ${(props) => props.theme.color.text};
  margin-left: 26px;
  font-size: ${(props) => props.theme.font.size.default};
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

const WrapperLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoLink = styled(Link)`
  margin: 0;
  padding: 0;
`;

export default function Header() {
  return (
    <Container>
      <WrapperLogo>
        <LogoLink to="/">
          <IconLogoSvg />
        </LogoLink>
      </WrapperLogo>
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
