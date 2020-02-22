import styled from 'styled-components';
import React from 'react';

import userPhoto from '../../img/user.jpg';

import bookmark from '../../img/SVG/bookmark.svg';
import chat from '../../img/SVG/chat.svg';

const StyledNav = styled.nav`
  
`;

const StyledIconBox = styled.div``;

const StyledIcon = styled.svg`
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
        <StyledIcon>
          <use xlinkHref={chat}></use>
        </StyledIcon>
      </StyledIconBox>

      <StyledIconBox>
        <StyledIcon>
        <use xlinkHref={bookmark}></use>
        </StyledIcon>
      </StyledIconBox>

      <StyledUser>
        <StyledUserPhoto>

        </StyledUserPhoto>
      </StyledUser>

    </StyledNav>
  );
};

export default Nav;