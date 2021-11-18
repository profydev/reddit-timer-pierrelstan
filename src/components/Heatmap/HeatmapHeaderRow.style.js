import styled from 'styled-components';

export const Container = styled.div`
  height: ${({ theme }) => theme.font.size.heatmap.headerHeight}px;
  margin-left: ${({ theme }) => theme.font.size.heatmap.dayWidth}px;
  display: flex;
  align-items: center;
  border: solid 1px ${({ theme }) => theme.color.heatmap.headerBorder};
  background-image: ${({ theme }) => theme.color.heatmap.headerBackground};
`;

export const Hour = styled.div`
  width: ${({ theme }) => theme.font.size.heatmap.hour * 2}px;
  text-align: center;
  color: ${({ theme }) => theme.color.heatmap.headerHour};
  font-size: ${({ theme }) => theme.font.size.small};
  font-weight: 500;
`;
