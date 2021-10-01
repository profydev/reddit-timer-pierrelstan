import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
margin-left: 20px;
display: flex;
flex-direction: column;
padding-top: 118px;
padding-bottom: 36px;`;

export const WrapperHowItWorks = styled.article`
`;
export const WrapperAbout = styled.article`
margin-top: 92px;
margin-bottom: 40px;`;

export const Title = styled.h1`
font-size:${({ theme }) => theme.font.size.large};
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
