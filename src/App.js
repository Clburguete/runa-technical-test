//vendors
import React from 'react';
import { Provider } from 'react-redux';
//store
import {
  store
} from './store';
//context
import { ErrorProviderWrapper } from './context';
//guards
import { ErrorBoundary } from './guards';

//components
import { Routing } from './routing';
import { MainContainer } from './components';

const App = () => {
  return (
    <Provider store={store}>
      <ErrorProviderWrapper>
        <ErrorBoundary>
          <MainContainer store={store}>
            <Routing/>
          </MainContainer>
        </ErrorBoundary>
      </ErrorProviderWrapper>
    </Provider>
  );
}

export default App;