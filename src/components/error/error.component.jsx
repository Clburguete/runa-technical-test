//vendors
import React from 'react';

//components
import {
  MainContainer,
  Button
} from '@components';

export const Error = props => {
  const navToDashboard = () => window.location.reload();

  return (
    <MainContainer>
      <h2>Ooops...something went wrong. Sorry!</h2>
      <Button
        className='c-button--logout'
        text={'Try again'}
        handleClick={navToDashboard}
      />
    </MainContainer>
  )
}