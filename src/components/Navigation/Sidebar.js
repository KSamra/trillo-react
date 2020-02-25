import styled from 'styled-components';
import React from 'react';

import ListItem from './List_Item';
import List from './List';

import { ReactComponent as flight} from '../../img/SVG/aircraft-take-off.svg';


const StyledSidebar = styled.nav`
  background-color: ${props => props.theme.color_grey_dark_1};
  flex: 0 0 18%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Sidebar = () => {
  return (
    <StyledSidebar>
      <List>
        <ListItem label="Hotels" image={flight}/>
        <ListItem label="Flights" image={flight}/>
        <ListItem label="Car rentals" image={flight}/>
        <ListItem label="Tours" image={flight}/>;
      </List>
    </StyledSidebar>
  );
}

export default Sidebar;