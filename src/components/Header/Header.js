import React from 'react';
import defaultSubreddit from '../../utils/defaultSubreddit';
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
            <NavListLink to={`/search/${defaultSubreddit}`}>Search</NavListLink>
          </NavListItem>
          <NavListItem>
            <NavListLink smooth="true" to="/#how-it-works">How it works</NavListLink>
          </NavListItem>
          <NavListItem>
            <NavListLink smooth="true" to="/#about">About</NavListLink>
          </NavListItem>
        </NavBar>
      </Wrapper>
    </ContainerHeader>
  );
}
