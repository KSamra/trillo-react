import styled from "styled-components";


const Background = styled.div`
  background: linear-gradient(
    to bottom right,
    ${props => props.theme.color_primary_light},
    ${props => props.theme.color_primary_dark});
  background-size: cover;
  background-repeat: no-repeat;

  /* the default text color */
  color: ${props => props.theme.color_grey_dark_2};

  /* temporary */
  min-height: 100vh;
  
  

`;


export default Background;