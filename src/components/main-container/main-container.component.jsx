//vendors
import React, { useContext } from 'react';

//context
import { ErrorContext } from './../../context';

//styles
import './main-container.css'

export const MainContainer = ({ children }) => {
  const 
    { errorType } = useContext(ErrorContext),
    hasError = !!errorType,
    throwError = () => {
      throw Error('something went wrong!')
    };
  
    hasError && throwError();

  return (
    <div className='c-main'>
      {children}
    </div>
  )
}