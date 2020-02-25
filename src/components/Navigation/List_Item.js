import styled from 'styled-components';
import React from 'react';

const styledListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

`;

const styledLink = styled.a`
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

const styledIcon = styled.svg`
  width: 1.75rem;
  height: 1.75rem;
  margin-right: 2rem;

  fill: currentColor;
`;



const ListItem = ({label}) => {
  return(
    <styledListItem>
      <styledLink>
        {label}
      </styledLink>
    </styledListItem>
  );
}

export default ListItem;