//vendors
import React, { Component, useContext } from 'react';

//context
import { ErrorContext } from './../../context';

//components
import { 
  NavButton,
  Input
} from './../../components';

export const WelcomeView = ({ history, userName }) => {
  const { errorType, setErrorType } = useContext(ErrorContext)
  const handleNavigation = target => history.push(target);

  return (
    <>
      <h1>Welcome!</h1>
      <h2>A frontend test by Carlos Luis Burguete</h2>
      <section>
        <p>
          <b>Hi there!</b> 
          If you're reading this, it means I was able to complete the technical test within the given timeline. I hope you enjoy my code -
          enter your name to access your dashboard. Enjoy your stay! :)
        </p>
        <p>

        </p>
      </section>
      {
        !userName &&
        <section>
          <Input/>
        </section>
      }
    </>
  )
}