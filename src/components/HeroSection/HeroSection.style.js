import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;
padding-top: 22px ;`;

export const Wrapper = styled.div`
text-align:center;`;

export const Image = styled.img`
max-width:100%;
`;

export const TableImageLink = styled(Link)`
padding-top: 30px;
display:flex;
justify-content:center;
`;

export const Title = styled.h1`
font-size: ${({ theme }) => theme.font.size};
line-height: 46px;
margin:0;
padding:0;`;

export const SubTitle = styled.h2`
font-family: ${({ theme }) => theme.font.family.default};
font-size: ${({ theme }) => theme.font.size.default};
line-height: 20px;
color: ${({ theme }) => theme.color.midLight};
font-weight: 100;
margin-top:21px`;

export const WrapperButton = styled.div`
margin-top: 44px `;

export const TextSubreddit = styled.p`
margin-top: 44px;
font-family:${({ theme }) => theme.font.family.default};
font-style: normal;
font-weight: 200;
font-size:${({ theme }) => theme.font.size.default};
margin-bottom: 0;
color: ${({ theme }) => theme.color.midLight};
text-decoration: none`;

export const WrapperSubreddit = styled.div``;

export const WrapperTable = styled.div`
display: flex;
justify-content: center;`;
