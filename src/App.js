//vendors
import React, { useContext } from 'react';

//context
import { ErrorProviderWrapper, ErrorContext } from './context';

//guards
import { ErrorBoundary } from './guards';

//assets
import logo from './assets';

//components
import { Routing } from './routing';
import { MainContainer } from './components';

const App = () => {
  return (
    <ErrorProviderWrapper>
      <ErrorBoundary errorType='asdad'>
        <MainContainer>
          <Routing/>
        </MainContainer>
      </ErrorBoundary>
    </ErrorProviderWrapper>
  );
}

export default App;
