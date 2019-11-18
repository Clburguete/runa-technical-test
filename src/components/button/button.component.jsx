//vendors
import React from 'react';

//styles
import './button.css';

export const Button = props => {
  const 
    { handleClick, text, disabled, className } = props,
    _handleClick = e => {
      e.preventDefault();
      handleClick();
    }
  
  return (
    <button 
      className={`c-button ${className}`}
      disabled={disabled}
      onClick={_handleClick}>
      {text.toUpperCase()}
    </button>
  )
}