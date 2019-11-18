// vendors
import React, { Component } from 'react';

//styles
import './input.css';

export class Input extends Component {

  constructor(props) {
    super(props);
  }

  _handleChange = (_value) => {
    this.props.handleChange(_value);
  }

  render() {
    const {
      id = '',
      value = '',
      name = 'username',
      innerRef = '',
      placeholder = '',
      type = 'text',
      errorMessage = 'Please double check your username. Only regular characters are allowed',
      autoFocus = false,
      tabIndex = 0,
      maxLength,
      handleFocus = () => { },
      handleBlur = () => { }
    } = this.props;


    const
      onlyChars = new RegExp(/^[a-zA-Z]*$/),
      isInvalid = (!onlyChars.test(value));

    console.log('isinvalid', isInvalid)
    console.log(onlyChars.test('asdasd').toString())
    return (
      <>
        <label 
          className='c-input__label'
          htmlFor="username">
          { label }
        </label>
        <input
          className='c-input'
          id={id}
          invalid={isInvalid.toString()}
          maxLength={maxLength}
          value={value}
          name={name}
          placeholder={placeholder}
          type={type}
          autoFocus={autoFocus}
          tabIndex={tabIndex}
          onChange={e => this._handleChange(e.target.value)}
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

}