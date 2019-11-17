//vendors
import React from 'react';

//assets
import logo from './assets';

//components
import { Routing } from './routing';
import { MainContainer } from './components';

const App = () => {
  return (
    <MainContainer>
      <Routing/>
    </MainContainer>
  );
}

export default App;
