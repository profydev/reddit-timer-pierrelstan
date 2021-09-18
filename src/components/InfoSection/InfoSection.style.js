import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.section`
width: 100%;
max-width: 770px;
height: 457px;
margin:auto;
padding: 0px 20px;
`;

export const Wrapper = styled.div`
margin-top: 119px;
margin-left: 16px;
display: flex;
flex-direction: column;`;

export const WrapperHowItWorks = styled.div`
`;
export const WrapperAbout = styled.div`
margin-top: 92px;
margin-bottom: 40px;`;

export const Title = styled.h1`
font-family:${({ theme }) => theme.font.family.headline};
font-style: normal;
font-weight: normal;
color:${({ theme }) => theme.color.dark};
font-size:${({ theme }) => theme.font.size.large};
line-height:1.2;
margin-bottom: 10px`;

export const LinkProfy = styled(Link)`
color:#3c88d5;
text-decoration: none;`;
