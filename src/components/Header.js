import styled from 'styled-components';

const Header = styled.header`
  height: 7rem;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: ${props => props.theme.color_grey_light_2};
  font-size: 1.4rem;
`;

export default Header;