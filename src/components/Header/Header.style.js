import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent } from './logo.svg';

export const ContainerHeader = styled.header`
  background-color: #fff;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 105px;
  max-width: 100%;
  margin: 0 80px;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-left: 10px;
    margin-right: 10px;
    height: 75px;
  }
`;

export const NavListLink = styled(Link)`
  color: ${(props) => props.theme.color.text};
  font-size: ${(props) => props.theme.font.size.default};
  text-decoration: none;
  color: ${(props) => props.theme.color.text};
`;

export const NavBar = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: inherit;
`;

export const WrapperLogo = styled.div``;

export const LogoLink = styled(Link)`
  margin: 0;
  padding: 0;
`;
export const NavListItem = styled.li`
  padding: 0 0 0 26px;
  @media (max-width: 768px) {
    padding: 0 0 0 8px;
  }
`;

export const Logo = styled(ReactComponent)`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    padding-top: 10px;
  }
`;
