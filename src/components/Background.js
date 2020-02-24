import styled from "styled-components";


const Background = styled.div`
  background-image: linear-gradient(
    to bottom right,
    ${props => props.theme.color_primary_light},
    ${props => props.theme.color_primary_dark});
  background-size: cover;
  background-repeat: no-repeat;
  /* text color for all children */
  color: ${props => props.theme.color_grey_dark_2};
  height: 100vh;
  width: 100vw;
  display: flex;
`;


export default Background;