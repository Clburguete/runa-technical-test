//vendors
import React from 'react';

//config
import { ROUTES } from '@routing';

//components
import { UserForm } from './user-form';

export const WelcomeView = props => {
  const { 
    history,
    userName,
    isUserLogged
  } = props;


  const navigateToDashboard = () => history.push(ROUTES.dashboard.path);
console.log('props.', props)
  return (
    <>
      <h1>Welcome {isUserLogged && `back ${userName}`}!</h1>
      <h2>A frontend test by Carlos Luis Burguete</h2>
      {
        isUserLogged ?
        <>
          <span> Uh-oh... Feeling forgetful? It looks like you already created a user</span>
          <br/>
          <br/>
          <span> Click <b
              style={{cursor: 'pointer'}}
              onClick={navigateToDashboard}>
             here 
            </b> to go back to your dashboard
            </span>
        </>
        :
        <>
          <section>
            <p>
              <b>Hi there! </b>
              If you're reading this, it means I was able to complete the technical test within the given timeline. I hope you enjoy my code -
              enter your name to access your dashboard. Enjoy your stay! :)
            </p>
          </section>
          <section>
            <UserForm {...props}/>
          </section>
        </>
      }
    </>
  )
}
