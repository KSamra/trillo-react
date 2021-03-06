import styled from 'styled-components';
import React from 'react';

import { ReactComponent as magnifying_glass } from '../img/SVG/magnifying-glass.svg';

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items:center;

  /* Temporary */

  flex: 0 0 40%;

`;

const StyledInput = styled.input`
  font-family: inherit;
  font-size: inherit;
  background-color: color-grey-light-2;
  border: none;
  color: inherit;
  padding: .7rem 2rem;
  border-radius: 100px;
  width: 90%;
  transition: all .2s;
  margin-right: -3.25rem;

  &:focus {
    outline: none;
    width: 100%;
    background-color: color-grey-light-3;
  }

  &::-webkit-input-placeholder {
    font-weight: 100;
    color: var(--color-grey-light-4);
  }
`;

const StyledButton = styled.button`
  border: none;
  background-color: color-grey-light-2;

  &:focus {
    outline: none;
  }

  &:active {
    transform: translateY(2px);
  }
`;

const StyledSVG = styled.svg`
  height: 2rem;
  width: 2rem;
  fill: ${props => props.theme.color_grey_dark_3};
`;



const Search = () => {
  return (
    <StyledForm>
      <StyledInput type="text" placeholder="Search for Hotels"/>
      <StyledButton>
        <StyledSVG as={magnifying_glass}/>
      </StyledButton>
    </StyledForm>
  );
}

export default Search;