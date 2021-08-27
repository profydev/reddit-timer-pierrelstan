import React from 'react';
import {
  ContainerHeader,
  Wrapper,
  WrapperLogo,
  LogoLink,
  NavBar,
  NavListItem,
  NavListLink,
  Logo,
} from './Header.style';

export default function Header() {
  return (
    <ContainerHeader>
      <Wrapper>
        <WrapperLogo>
          <LogoLink to="/">
            <Logo />
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
