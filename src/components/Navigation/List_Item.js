import styled from 'styled-components';
import React from 'react';

const StyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

`;

const StyledLink = styled.a`
  &:link,
  &:visited {

    color: ${props => props.theme.color_grey_light};
    text-decoration: none;
    text-transform: uppercase;
    display: inline-block;
    padding: 1.5rem 3rem;

    
    position: relative;
    z-index: 2;

    display: flex;
    align-items: center;
  }

`;

const StyledIcon = styled.svg`
  width: 1.75rem;
  height: 1.75rem;
  margin-right: 2rem;

  fill: currentColor;
`;



const ListItem = ({label, image}) => {
  console.log(`Label received: ${label}`)
  return(
    <StyledListItem>
      <StyledLink>
        <StyledIcon as={image}></StyledIcon>
        {label}
      </StyledLink>
    </StyledListItem>
  );
}

export default ListItem;