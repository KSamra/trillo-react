import React from 'react';
import {ThemeProvider} from 'styled-components';

// Components
import Background from './components/Background';
import Container from './components/Container';
import Header from './components/Header';
import Logo from './components/Logo';
import Search from './components/Search';
import Nav from './components/UserNav/Nav';

import Content from './components/Content';
import Sidebar from './components/Navigation/Sidebar';
import HotelView from './components/HotelView/HotelView';


// base theme
const theme = {
  color_primary: '#eb2f64',
  color_primary_light: '#FF3366',
  color_primary_dark: '#BA265D',

  color_grey_light_1: '#faf9f9',
  color_grey_light_2: '#f4f2f2',
  color_grey_light_3: '#f0eeee',
  color_grey_light_4: '#ccc',

 color_grey_dark_1: '#333',
 color_grey_dark_2: '#777',
 color_grey_dark_3: '#999',
 
 shadow_dark: '0 2rem 6rem rgba(0,0,0,.3)'
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Background>
        
        <Container>
          <Header>
            <Logo/>
            <Search/>
            <Nav/>
          </Header>

          <Content>
            <Sidebar>Navigation</Sidebar>
            <HotelView>Hotels</HotelView>
          </Content>
        </Container>

      </Background>
    </ThemeProvider>
  );
}

export default App;