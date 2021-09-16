import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent } from './table.svg';

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;
padding-top: 127px ;`;

export const Wrapper = styled.div`
text-align:center;`;

export const Image = styled(ReactComponent)`
`;

export const TableImageLink = styled(Link)`
padding-top: 30px;
display:flex;
justify-content:center;
`;

export const Title = styled.h1`
font-family:${({ theme }) => theme.font.family.headline};
color:${({ theme }) => theme.color.dark};
font-weight: 400;
font-size: 38px;
line-height: 46px;
margin:0;
padding:0;`;

export const SubTitle = styled.h3`
font-family: ${({ theme }) => theme.font.family.default};
font-size: ${({ theme }) => theme.font.size.default};
line-height: 20px;
color: ${({ theme }) => theme.color.midLight};
font-weight: 100;
margin-top:21px`;

export const Button = styled(Link)`
background-color:#FDB755;
color:${({ theme }) => theme.color.light};
border-radius: 4px;
text-transform: uppercase;
padding: 9px 16px;
text-decoration: none;
font-family: ${({ theme }) => theme.font.family.default};
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 9px;`;

export const WrapperButton = styled.div`
margin-top: 48px `;

export const TextSubreddit = styled.p`
margin-top: 48px;
font-family:${({ theme }) => theme.font.family.default};
font-style: normal;
font-weight: 200;
font-size: 16px;
margin-bottom: 0;
color: ${({ theme }) => theme.color.midLight};
text-decoration: none`;

export const WrapperSubreddit = styled.div`
margin-top: 48px`;

export const WrapperTable = styled.div`
display: flex;
justify-content: center;`;
