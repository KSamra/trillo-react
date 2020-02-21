import styled from "styled-components";
import React from 'react';

const StyledBackground = styled.div`
  color: ${({theme}) => theme.color_primary};
  font-size: 20rem;
  height: 10rem;
  background-color: cyan;
  font-weight: bold;

  

`;

const Background = () => {
  return(
    <StyledBackground>Hello</StyledBackground>
  )
}

export default Background;