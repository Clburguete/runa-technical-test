//vendors
import React, { Component } from 'react';

//components
import { 
  Input,
  Button
} from '@components';

class UserForm extends Component {

  _handleSubmit = () => {
    const { history, handleSubmit } = this.props;
    handleSubmit();
    history.push('/dashboard');
  }

  _handleChange = val => {
    const { handleChange } = this.props;
    handleChange(val);
  }

  render = () => {
    const {
      handleChange,
      userName
    } = this.props;

    const validityRegex = /^[a-zA-Z]*$/;
    const isValidUserName = ((new RegExp(validityRegex)).test(userName))

    return (
      <form>
        <Input
          errorMessage={'Please double check your username. Only regular characters are allowed'}
          label={'Please enter your username'}
          value={userName}
          name={'username'}
          isValid={isValidUserName}
          validityRegex={/^[a-zA-Z]*$/}
          handleChange={val => handleChange(val)}
        />
        <Button
          className='c-button--login'
          disabled={!userName || !isValidUserName}
          text={"Let's go!"}
          handleClick={this._handleSubmit}
        />
      </form>
    )
  }
}

export default UserForm