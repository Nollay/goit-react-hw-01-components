import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const List = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  border: 1px solid black;
  border-radius: 4px;
`;

export const Status = styled.span`
  margin: 16px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${props => {
    return props.isOnline === true ? 'green' : 'red';
  }};
`;
