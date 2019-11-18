//vendors
import React from 'react';
//components
import { Button } from '@components';

export const NavButton = ({ text, path, handleClick, className='' }) => {
  const _handleClick = () => handleClick(path);
  return (
    <Button
      className={className}
      text={text}
      handleClick={_handleClick}
    />
  )
}