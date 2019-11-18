//vendors
import React, { useState } from 'react';

const Context = React.createContext();

const ErrorProviderWrapper = ({ children }) => {
  const [ errorType, setErrorType ] = useState('')

  return (
    <Context.Provider
      value={{
        errorType, setErrorType
      }}
    >
      { children }
    </Context.Provider>
  )
}

export { ErrorProviderWrapper, Context as ErrorContext };