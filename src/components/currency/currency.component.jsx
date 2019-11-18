//vendors
import React from 'react';

//styles
import './currency.css';

export const CurrencyButton = props => {
  const {
    value,
    currency,
    handleClick = () => {}
  } = props;
  return(
    <div
      className="c-currency"
      onClick={handleClick}>
      <h5 className='c-currency__num'>
        {value}
      </h5>
      <h6 className='c-currency__curr'>
        {currency}
      </h6>
    </div>
  )
}