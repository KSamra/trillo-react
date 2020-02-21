import styled from 'styled-components';

const Container = styled.div`
  min-width: 120rem;
  background-color: ${props => props.theme.color_grey_light_1};
  box-shadow: ${props => props.theme.shadow_dark};
  min-height: 50rem;
  margin: 8rem auto;
  justify-content: center;
`;

export default Container;