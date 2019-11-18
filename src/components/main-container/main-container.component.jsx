//vendors
import React, { useContext } from 'react';

//context
import { ErrorContext } from './../../context';

//styles
import './main-container.css'

export const MainContainer = ({ children, store }) => {
  const 
    { errorType } = useContext(ErrorContext),
    hasError = !!errorType,
    throwError = () => {
      throw Error('something went wrong!')
    };

    let loading = false;
  
    hasError && throwError();

    store.subscribe(() => {
      const { isLoading } = store.getState();

    });

  return (
    <div className='c-main'>
      {children}
    </div>
  )
}