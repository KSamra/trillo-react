import styled from 'styled-components';
import React from 'react';



const StyledList = styled.ul`
  font-size: 1.4rem;
  list-style: none;
  margin-top: 3.5rem;

`;

const List = ({children}) => {
  return (
    <StyledList>
      {children}
    </StyledList>
  );
}

export default List;