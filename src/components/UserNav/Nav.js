import styled from 'styled-components';
import React from 'react';

import userPhoto from '../../img/user.jpg';

import bookmark from '../../img/SVG/bookmark.svg';
import chat from '../../img/SVG/chat.svg';

// import bookmark from '../../logo.svg';
// import chat from '../../logo.svg';


const StyledNav = styled.nav`
  
`;

const StyledIconBox = styled.div``;

const StyledNotification = styled.span`

`;

const StyledIcon = styled.img.attrs(props=>({
  src: props.image
}))`
  height: 2.25rem;
  width: 2.25rem;
`;

const StyledUser = styled.div`

`;

const StyledUserPhoto = styled.img.attrs({
  src: userPhoto,
  alt: "Profile Photo"
})`
  height: 3.75rem;
  border-radius: 50%;
`;


const Nav = () => {
  return (
    <StyledNav>

      <StyledIconBox>
        <StyledIcon image={bookmark}/>
        <StyledNotification>7</StyledNotification>
      </StyledIconBox>

      <StyledIconBox>
        <StyledIcon image={chat}/>
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