import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
width: 100%;
max-width: 778px;
height:458px;
margin: 119px auto 0;
padding: 0px 20px;

@media (max-width:850px){
  padding:0;
  height:auto;
}
`;

export const Wrapper = styled.div`
margin-top: 119px;
margin-left: 20px;
display: flex;
flex-direction: column;`;

export const WrapperHowItWorks = styled.article`
`;
export const WrapperAbout = styled.article`
margin-top: 92px;
margin-bottom: 40px;`;

export const Title = styled.h1`
font-size:${({ theme }) => theme.font.size.medium};
line-height:1.2;
margin-bottom: 9px`;

export const List = styled.ul`
font-family:${({ theme }) => theme.font.family.default};
font-weight: normal;
font-size: ${({ theme }) => theme.font.size.default};
color:${({ theme }) => theme.color.text};
margin: 0;
padding: 0;
position: relative;
top: 3px;
left: -1px;
`;

export const LinkProfy = styled(Link)`
color:${({ theme }) => theme.color.blue};
text-decoration: none;`;

export const ListItem = styled.li`
list-style: none;
`;

export const Text = styled.p`
font-family: ${({ theme }) => theme.font.family.default};
font-weight: normal;
font-size: ${({ theme }) => theme.font.size.default};
margin-top: 4px;
text-align: inherit;
float:left;
}`;
