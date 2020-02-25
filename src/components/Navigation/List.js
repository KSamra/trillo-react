import styled from 'styled-components';
import React from 'react';

import List_Item from './List_Item';


const styledList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const List = (props) => {
  return (
    <styledList>
      <List_Item>
        
      </List_Item>
      <List_Item></List_Item>
      <List_Item></List_Item>
      <List_Item></List_Item>
    </styledList>
  );
}