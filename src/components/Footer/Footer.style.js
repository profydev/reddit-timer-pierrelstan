import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent } from './logo.svg';

export const Container = styled.footer``;
export const LogoLink = styled(Link)``;

export const Logo = styled(ReactComponent)`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    padding-top: 10px;
  }
`;
