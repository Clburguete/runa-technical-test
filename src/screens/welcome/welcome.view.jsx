//vendors
import React, { Component, useContext } from 'react';

//errorContext
import { ErrorContext } from './../../context';

export const WelcomeView = props => {
  const { errorType, setErrorType } = useContext(ErrorContext)

  setErrorType('asdsad');
  
  return (
    <>
      <h2>WelcomeView!!</h2>
    </>
  )
}