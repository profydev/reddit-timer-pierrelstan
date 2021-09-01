import React from 'react';
import {
  Container,
  Logo,
  LogoLink,
  List,
  ListItem,
} from './Footer.style';

export default function Footer() {
  return (
    <Container>
      <List>
        <ListItem
          to={{ pathname: 'https://profy.dev/employers' }}
          target="_blank"
        >
          profy.dev
        </ListItem>
        <LogoLink to="/">
          <Logo />
        </LogoLink>
        <ListItem to="/terms">Terms &amp; Privacy</ListItem>
      </List>
    </Container>
  );
}
