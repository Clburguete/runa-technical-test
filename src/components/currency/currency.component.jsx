//vendors
import React from 'react';

//styles
import './currency.css';

export const CurrencyButton = props => {
  const {
    value,
    currency,
    additionalClass,
    handleClick
  } = props;
  return(
    <div
      className={`c-currency ${additionalClass}`}
      onClick={handleClick}>
      {value &&
        <h5 className='c-currency__num'>
          {value}
        </h5>
      }
      <h6 className='c-currency__curr'>
        {currency.toUpperCase()}
      </h6>
    </div>
  )
}

CurrencyButton.defaultProps = {
  value: '',
  currency:'',
  additionalClass:'',
  handleClick : () => { }
}