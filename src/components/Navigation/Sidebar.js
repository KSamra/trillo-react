import styled from 'styled-components';

const Sidebar = styled.nav`
  background-color: ${props => props.theme.color_grey_dark_1};
  flex: 0 0 18%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default Sidebar;