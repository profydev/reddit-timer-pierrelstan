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
