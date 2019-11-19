//vendors
import React from 'react';

import { ROUTES } from '@routing';

//styles
import './header.css';

//components
import { NavButton } from '@components';

export const Header = props => {
  const {
    logout,
    history
  } = props;
  console.log(history)
  return (
    <nav className='c-navbar'>
      <NavButton
        className='c-button--menu c-button--return'
        text={'Return'}
        handleClick={history.goBack}
      />
      {
        Object.keys(ROUTES).map((key, i) => {
          const route = ROUTES[key];
          if (key === 'default' || key === 'welcome') return false;
          return (
            <NavButton
              key={`${i}${key}`}
              className='c-button--menu'
              text={key === 'currencies' ? 'Additional currencies' : key}
              path={route.path}
              handleClick={() => history.push(route.path)}
            />
          )
        })
      }
      <NavButton
        className='c-button--menu c-button--logout'
        text={'Log out'}
        handleClick={logout}
      />
      
    </nav>
  )
}