//vendors
import React from 'react';
//components
import { Button } from './../button';

export const NavButton = ({ text, path, handleClick}) => {
  const _handleClick = () => handleClick(path);
  return (
    <Button
      text={text}
      handleClick={_handleClick}
    />
  )
}