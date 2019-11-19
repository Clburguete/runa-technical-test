//vendors
import React from 'react';

//styles
import './row.css';

export const Row = ({ children, className }) => (
  <section className={`c-row ${className}`}>
    {children}
  </section>
)

Row.defaultProps = {
  children : '',
  className : ''
} 