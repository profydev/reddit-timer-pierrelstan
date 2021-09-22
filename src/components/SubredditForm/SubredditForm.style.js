import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 90px;
`;

export const Label = styled.label`
color: ${({ theme }) => theme.color.midLight};
font-size: ${({ theme }) => theme.font.size.medium};
margin-right: 10px;
line-height: 36px;
`;

export const WrapperForm = styled.div`
`;

export const Form = styled.form`
display: flex;`;

export const Title = styled.h1`
font-family: ${({ theme }) => theme.font.family.headline};
font-size: ${({ theme }) => theme.font.size.extraLarge};
color: ${({ theme }) => theme.color.dark};
margin-top: 27px;
margin-bottom: 22px;
font-weight: 400`;
