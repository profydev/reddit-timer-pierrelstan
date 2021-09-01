import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent } from './logo.svg';

export const Container = styled.footer`
  display: inline-grid;
  height: 80px;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 75px;
  }
  @media (max-width: 358px) {
    margin-left: 5px;
    margin-right: 5px;
    height: 75px;
  }
`;

export const ListItem = styled(Link)`
  color: ${(props) => props.theme.color.text};
  font-size: 14px;
  letter-spacing: ${({ theme }) => theme.font.letterSpacing.default};
  text-decoration: none;
  margin-top: 8px;
  font-weight: 300;
  padding: 0;
  color: ${(props) => props.theme.color.text};
  @media (max-width: 400px) {
    font-size: 10px;
  }
`;
// grid-template-columns: 430px 430px 430px;
export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 31%);
  grid-column-gap: -30px;
  justify-items: center;
  padding: 0;
`;

export const LogoLink = styled(Link)`
  padding: 0;
  margin: 0;
`;

export const Logo = styled(ReactComponent)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
