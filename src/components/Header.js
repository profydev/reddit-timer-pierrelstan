import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import IconLogoSvg from '../utils/IconLogoSvg';

const ContainerHeader = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  background-color: #fff;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 105px;
  max-width: 1441px;
  margin: 0 80px;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-left: 10px;
    margin-right: 10px;
    height: 75px;
  }
`;

const NavListLink = styled(Link)`
  color: ${(props) => props.theme.color.text};
  font-size: ${(props) => props.theme.font.size.default};
  text-decoration: none;
  color: ${(props) => props.theme.color.text};
`;

const NavBar = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: inherit;
`;

const WrapperLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    padding-top: 10px;
  }
`;

const LogoLink = styled(Link)`
  margin: 0;
  padding: 0;
`;
const NavListItem = styled.li`
  padding: 0 0 0 26px;
  @media (max-width: 768px) {
    padding: 0 0 0 8px;
  }
`;

export default function Header() {
  return (
    <ContainerHeader>
      <Wrapper>
        <WrapperLogo>
          <LogoLink to="/">
            <IconLogoSvg />
          </LogoLink>
        </WrapperLogo>
        <NavBar>
          <NavListItem>
            <NavListLink to="/search/javascript">Search</NavListLink>
          </NavListItem>
          <NavListItem>
            <NavListLink to="/#how-it-works">How it works</NavListLink>
          </NavListItem>
          <NavListItem>
            <NavListLink to="/#about">About</NavListLink>
          </NavListItem>
        </NavBar>
      </Wrapper>
    </ContainerHeader>
  );
}
