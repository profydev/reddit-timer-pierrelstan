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
color:${({ theme }) => theme.color.dark}
font-weight: normal;
font-size: 38px;
line-height: 46px;
margin:0;
padding:0;`;

export const SubTitle = styled.h3`
font-family: ${({ theme }) => theme.font.family.default};
font-style: normal;
font-weight: normal;
font-size: ${({ theme }) => theme.font.size.default};
line-height: 20px;
margin-top:21px`;
