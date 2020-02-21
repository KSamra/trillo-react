import React from 'react';
import Background from './components/Background';
import {ThemeProvider} from 'styled-components';

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
      <Background/>
    </ThemeProvider>
  );
}

export default App;