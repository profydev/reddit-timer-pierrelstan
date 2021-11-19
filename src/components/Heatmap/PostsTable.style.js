import styled from 'styled-components';

export const TableHead = styled.thead`
padding: 10px`;

export const Text = styled.td`
text-overflow: ellipsis;
overflow: hidden;
white-space: nowrap;`;

export const Table = styled.table`
   border-collapse: collapse;
    caption-side: top;
    border-collapse: collapse;
    caption-side: bottom;

 tbody {
      vertical-align: top;
    }

   td,
    th {
      border: 1px solid;
      font-weight: normal;
      font-size: 14px;
      padding: 5px;

    }
    td,
    tr {
      padding: 4px;
      margin:10px;
    }
   th: {
    text-align: left;
   }
   td: {
       margin:10px;
   }
   th:nth-child(1) {
    text-align: left;
    width: 360px;
   }
   th:nth-child(2) {
    text-align: left;
   }
   th:nth-child(3) {
    text-align: left;
   }
   th:nth-child(4) {
    text-align: left;
   }
   th:nth-child(5) {
    text-align: left;
   }
    `;

export const Container = styled.div`
width: 787px;
margin: auto;
display: flex;
justify-content: center;
flex-direction: column`;

export const Heading = styled.h2`
margin-bottom: 4px;
;`;

export const Link = styled.a`
  color: ${(props) => props.theme.color.blue};
  font-size: ${(props) => props.theme.font.size.default};
  text-decoration: none;
`;
