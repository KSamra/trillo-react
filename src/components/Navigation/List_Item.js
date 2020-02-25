import styled from 'styled-components';
import React from 'react';

const StyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  
    position: relative;

  &:not(:last-child) {
    margin-bottom: .5rem;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 3px;
    background-color: ${props => props.theme.color_primary};
    transform: scaleY(0);
    transition: transform .2s,
                width .4s cubic-bezier(1, 0, 0, 1) .2s, 
                background-color .1s;
  }

  &:hover::before{
    transform: scaleY(1);
    width: 100%;
  }

  &:active::before {
    background-color: ${props => props.theme.color_primary_light};
  }

`;

const StyledLink = styled.a`
  &:link,
  &:visited {

    color: ${props => props.theme.color_grey_light};
    text-decoration: none;
    text-transform: uppercase;
    display: inline-block;
    padding: 1.5rem 3rem;
    color: #fff;
    
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
      <StyledLink href="#">
        <StyledIcon as={image}></StyledIcon>
        {label}
      </StyledLink>
    </StyledListItem>
  );
}

export default ListItem;