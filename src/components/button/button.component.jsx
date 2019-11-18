//vendors
import React from 'react';

//styles
import './button.css';

export const Button = props => {
  const 
    { handleClick, text, disabled } = props,
    _handleClick = e => {
      e.preventDefault();
      handleClick();
    }
  
  return (
    <button 
      className='c-button'
      disabled={disabled}
      onClick={_handleClick}>
      {text.toUpperCase()}
    </button>
  )
}