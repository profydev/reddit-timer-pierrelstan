import styled from 'styled-components';

export const Label = styled.label`
color: ${({ theme }) => theme.color.midLight};
font-size: ${({ theme }) => theme.font.size.medium};
margin-right: 9px;
line-height: 19px;
`;

export const Wrapper = styled.div`
text-align:center;
`;

export const Form = styled.form``;

export const Headline = styled.h1`
color: ${({ theme }) => theme.color.dark};
margin-top: 12px;
margin-bottom: 20px;
font-weight: 400`;

export const Input = styled.input`
width: 336px;
height: 32px;
padding: 0px 17px;
font-size: ${({ theme }) => theme.font.size.small};
border-radius: 2px;
border: 1px solid ${({ theme }) => theme.color.midLight};
background-color: ${({ theme }) => theme.color.light};
margin-bottom: 0;
margin-left:10px;
margin-top: 2px;
line-height: 1.15;

@media (max-width: 700px) {
  width:auto;
}
`;
