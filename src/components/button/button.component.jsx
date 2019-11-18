//vendors
import React from 'react';

//styles
import './button.css';

export const Button = ({ handleClick, text }) => {
  const _handleClick = () => handleClick();
  
  return (
    <button 
      className='c-button'
      onClick={_handleClick}>
      {text}
    </button>
  )
}