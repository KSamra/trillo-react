import styled from 'styled-components';
import React from 'react';

import photo from '../../img/user.jpg'


const StyledPhoto = styled.img.attrs(props => ({
  src: photo
}))`
  height: 3.75rem;
  border-radius: 50%;
`;

const StyledUserName = styled.span`

`;

const ProfilePhoto = (props) => {
  return (
    <div>
      <StyledPhoto/>
      <StyledUserName>Jonas</StyledUserName>  
    </div>
  )
};

export default ProfilePhoto;