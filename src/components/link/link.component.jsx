//vendors
import React from 'react';
//styles
import './link.css';

export const Link = ({ handleClick, text, disabled = false }) => (
  <b 
  className={`c-link ${disabled ? 'c-link--disabled' : ''}`}
  onClick={handleClick}>
    {text}
  </b>
)