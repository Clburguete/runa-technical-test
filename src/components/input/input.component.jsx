// vendors
import React from 'react';

//styles
import './input.css';

export const Input = props => {

  const _handleChange = (_value) => this.props.handleChange(_value);

  const {
    id,
    value,
    name,
    innerRef,
    placeholder,
    type,
    errorMessage,
    autoFocus,
    tabIndex,
    maxLength,
    handleFocus,
    handleBlur,
    label,
    validityFunc,
    validityRegex
  } = this.props;


  const isInvalid = (!(new RegExp(validityRegex)).test(value)) || validityFunc(value);

  return (
    <>
      <label
        className='c-input__label'
        htmlFor={name}>
        {label}
      </label>
      <input
        className={`c-input ${isInvalid ? 'c-input--invalid' : ''}`}
        id={id}
        innerRef={innerRef}
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
        isInvalid &&
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
  innerRef: '',
  placeholder: '',
  type: 'text',
  errorMessage: 'Generic ErrorMessage',
  autoFocus: false,
  tabIndex: 0,
  maxLength: null,
  handleFocus: () => { },
  handleBlur: () => { },
  label: 'Generic Input label',
  validityFunc: () => { },
  validityRegex: /[\s\S]*/
}