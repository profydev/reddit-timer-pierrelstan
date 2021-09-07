import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent } from './sign.svg';

export const Container = styled.footer`
  display:flex;
  width: 100%;
  height: 100px;
  align-items: center;
  max-width: 940px;
  margin: auto;
  padding: 0 20px;`;

export const ListItem = styled(Link)`
  flex:1;
  color: ${(props) => props.theme.color.text};
  font-size: ${(props) => props.theme.font.size.small};
  text-align: ${({ totheright }) => (totheright ? 'right ' : 'unset')};
  text-decoration: none;
  padding-top: ${({ totheright }) => (totheright ? '7px' : '8px')}`;

export const LogoLink = styled(Link)`
  padding: 0;
  margin: 0;
`;

export const Logo = styled(ReactComponent)`
`;
