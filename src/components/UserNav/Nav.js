import styled from 'styled-components';
import React from 'react';

import userPhoto from '../../img/user.jpg';


import { ReactComponent as BookmarkIcon} from '../../img/SVG/bookmark.svg';
import { ReactComponent as ChatIcon } from '../../img/SVG/chat.svg';


const StyledNav = styled.nav`  
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  & > * {
    padding: 0 2rem;
    cursor: pointer;
    height: 100%;

    display: flex;
    align-items: center;
  }

  & > *:hover {
    background-color: ${props => props.theme.color_grey_light_2};
  }

`;

const StyledIconBox = styled.div`
  position: relative;
`;

const StyledNotification = styled.span`
  font-size: .8rem;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background-color: ${props => props.theme.color_primary};
  color: #fff;
  position: absolute;
  top: 1.5rem;
  right: 1.1rem;

  /* Centering the text within the notification */
  display: flex;
  justify-content: center;
  align-items: center;

`;

// const StyledIcon = styled.img.attrs(props=>({
//   src: props.image
// }))`
//   height: 2.25rem;
//   width: 2.25rem;
//   fill: ${props => props.theme.color_grey_dark_2};

// `;

const StyledIcon = styled.svg`
  height: 2.25rem;
  width: 2.25rem;
  fill: ${props => props.theme.color_grey_dark_2};
`;

const StyledUser = styled.div`

`;

const StyledUserPhoto = styled.img.attrs({
  src: userPhoto,
  alt: "Profile Photo"
})`
  height: 3.75rem;
  border-radius: 50%;
  margin-right: 1rem;
`;


const Nav = () => {
  return (
    <StyledNav>

      <StyledIconBox>
        <StyledIcon as={BookmarkIcon}/>
        <StyledNotification>7</StyledNotification>
      </StyledIconBox>

      <StyledIconBox>
        <StyledIcon as={ChatIcon}/>
        <StyledNotification>13</StyledNotification>
      </StyledIconBox>

      <StyledUser>
        <StyledUserPhoto>

        </StyledUserPhoto>
      </StyledUser>

    </StyledNav>
  );
};

export default Nav;