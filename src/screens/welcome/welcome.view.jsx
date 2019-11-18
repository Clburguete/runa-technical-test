//vendors
import React, { Component, useContext } from 'react';

//config
import { ROUTES } from './../../config';

//context
import { ErrorContext } from './../../context';

//components
import { NavButton } from './../../components';

export const WelcomeView = ({ history }) => {
  const { errorType, setErrorType } = useContext(ErrorContext)
  const handleNavigation = target => history.push(target);

  console.log('history', history)
  return (
    <>
      <h1>Welcome!</h1>
      <h2>A landing page by Carlos Luis Burguete</h2>
      <section>
        <p>
          <b>Hi there!</b> 
          If you're reading this, it means I was able to complete the technical test within the given timeline. I hope you enjoy my code -
          use the links below to navigate between routes. Enjoy your stay! :)
        </p>
      </section>
      <section>
        {
          Object.keys(ROUTES).map((key, i) => {
            const route = ROUTES[key];
            return (
              <NavButton
                key={`${i}${key}`}
                text={key}
                path={route.path}
                handleClick={history.push}
                />
            )
          })
          }
      </section>
    </>
  )
}