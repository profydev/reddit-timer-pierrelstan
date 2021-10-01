import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Button = styled.button`
  height: 36px;
  line-height: 36px;
  padding: 0 16px;
  background-color:${({ theme }) => theme.color.apricotYellow};
  color:${({ theme }) => theme.color.light};
  font-size: ${(props) => props.theme.font.size.small};
  font-weight: 500;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;`;
