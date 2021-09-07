import React from 'react';
import {
  Container,
  Logo,
  LogoLink,
  ListItem,
} from './Footer.style';

export default function Footer() {
  const RIGHT = 'true';
  return (
    <Container>
      <ListItem
        as="a"
        href="https://profy.dev/employers"
      >
        profy.dev
      </ListItem>
      <LogoLink to="/">
        <Logo />
      </LogoLink>
      <ListItem to="/terms" totheright={RIGHT}>
        Terms &amp; Privacy
      </ListItem>
    </Container>
  );
}
