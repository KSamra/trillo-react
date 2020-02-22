import styled from 'styled-components';
import React from 'react';

const StyledIconBox = styled.div`

`;

const StyledSVG = styled.svg`
  height: 2.25rem;
  width: 2.25rem;
`;


const IconBox = (props) => {
  const imageUrl = require(`../../img/sprite.svg#${props.image}`);
  return (
    <StyledIconBox>
      <StyledSVG>
        <use xlinkHref={imageUrl}> </use>
      </StyledSVG>
    </StyledIconBox>
  );
};

export default IconBox;