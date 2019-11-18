//vendors
import React from 'react';
//styles
import './backdrop.css';

export const Backdrop = ({ children, isBlocking = true }) => {
  const handleClick = e => {
    isBlocking &&
      e.preventDefault() &&
      e.stopPropagation();
    return false;
  }
  return (
    <div
      className="c-backdrop" 
      onClick={handleClick}>
      {children}
    </div>
  )
}