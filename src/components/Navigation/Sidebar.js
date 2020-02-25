import styled from 'styled-components';
import React from 'react';

import ListItem from './List_Item';
import List from './List';

import { ReactComponent as flight} from '../../img/SVG/aircraft-take-off.svg';
import { ReactComponent as home} from '../../img/SVG/home.svg';
import { ReactComponent as key} from '../../img/SVG/key.svg';
import { ReactComponent as map} from '../../img/SVG/map.svg';



const StyledSidebar = styled.nav`
  background-color: ${props => props.theme.color_grey_dark_1};
  flex: 0 0 18%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Legal = styled.div`
  font-size: 1.2rem;
  color: ${props => props.theme.color_grey_light_4};
  text-align: center;
  padding: 2.5rem;
`;

const Sidebar = () => {
  return (
    <StyledSidebar>
      <List>
        <ListItem label="Hotels" image={home}/>
        <ListItem label="Flights" image={flight}/>
        <ListItem label="Car rentals" image={key}/>
        <ListItem label="Tours" image={map}/>
      </List>
  <Legal> &copy; 2020 by Trillo </Legal>

    </StyledSidebar>
  );
}

export default Sidebar;