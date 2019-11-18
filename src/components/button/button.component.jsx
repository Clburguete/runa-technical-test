//vendors
import React from 'react';

//styles
import './button.css';

export const Button = props => {
  const 
    { handleClick, text } = props,
    _handleClick = e => {
      e.preventDefault();
      console.log(props)
      handleClick();
    }
  
  return (
    <button 
      className='c-button'
      onClick={_handleClick}>
      {text.toUpperCase()}
    </button>
  )
}