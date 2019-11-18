//vendors
import React, { useContext } from 'react';

//context
import { ErrorContext } from './../../context';

export const MainContainer = props => {
  const 
    { errorType } = useContext(ErrorContext),
    hasError = !!errorType,
    throwError = () => {
      throw Error('something went wrong!')
    };
  
    hasError && throwError();

  return (
    <>
      {props.children}
    </>
  )
}