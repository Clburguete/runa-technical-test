//vendors
import React, { Component, useContext } from 'react';

//config
import { ROUTES } from './../../config';

//context
import { ErrorContext } from './../../context';

//components
import { NavButton } from './../../components';
import { UserForm } from './user-form';

export const WelcomeView = props => {
  const { 
    history,
    userName,
    isUserCreated
  } = props;
  const { errorType, setErrorType } = useContext(ErrorContext)
  const navigateToDashboard = () => history.push(ROUTES.dashboard.path);

  return (
    <>
      <h1>Welcome {isUserCreated && userName}!</h1>
      <h2>A frontend test by Carlos Luis Burguete</h2>
      <section>
        <p>
          <b>Hi there! </b> 
          If you're reading this, it means I was able to complete the technical test within the given timeline. I hope you enjoy my code -
          enter your name to access your dashboard. Enjoy your stay! :)
        </p>
        <p>

        </p>
      </section>
      {
        isUserCreated ?
        <>
          <span> Uh-oh... Feeling forgetful? It seems you already created a user</span>
          <br/>
          <span> Click <b onClick={navigateToDashboard}>here</b>to go back to your dashboard</span>
        </>
        :
        <section>
          <UserForm {...props}/>
        </section>
      }
    </>
  )
}