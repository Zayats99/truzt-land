import styled from 'styled-components';

export const Root = styled.div`
  display: block;
  position: absolute;
  top: -28px;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  padding: 4px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.deepBlue};
  white-space: nowrap;
`;
