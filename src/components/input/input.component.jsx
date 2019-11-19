// vendors
import React from 'react';

//styles
import './input.css';

export const Input = props => {

  const _handleChange = (_value) => props.handleChange(_value);

  const {
    id,
    value,
    name,
    placeholder,
    type,
    errorMessage,
    autoFocus,
    tabIndex,
    maxLength,
    handleFocus,
    handleBlur,
    label,
    isValid
  } = props;



  return (
    <>
      <label
        className='c-input__label'
        htmlFor={name}>
        {label}
      </label>
      <input
        className={`c-input ${!isValid ? 'c-input--invalid' : ''}`}
        id={id}
        maxLength={maxLength}
        value={value}
        name={name}
        placeholder={placeholder}
        type={type}
        autoFocus={autoFocus}
        tabIndex={tabIndex}
        onChange={e => _handleChange(e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {
        !isValid &&
        <span className='c-input__error'>
          {errorMessage}
        </span>
      }
    </>
  );
}


Input.defaultProps = {
  id: '',
  value: '',
  name: '',
  placeholder: '',
  type: 'text',
  errorMessage: 'Generic ErrorMessage',
  autoFocus: false,
  tabIndex: 0,
  maxLength: null,
  handleFocus: () => { },
  handleBlur: () => { },
  label: 'Generic Input label',
}