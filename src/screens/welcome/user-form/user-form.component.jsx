//vendors
import React, { Component } from 'react';

//components
import { 
  Input,
  Button
} from '@components';

class UserForm extends Component {

  _handleSubmit = () => {
    const { history } = this.props;
    history.push('/dashboard')
  }

  render = () => {
    const { 
      handleChange,
      userName
    } = this.props;

    return (
      <form>
        <Input
          errorMessage={'Please double check your username. Only regular characters are allowed'}
          label={'Please enter your username'}
          value={userName}
          name={'username'}
          validityRegex={/^[a-zA-Z]*$/}
          handleChange={val => handleChange(val)}
        />
        <Button
          disabled={!userName}
          text={"Let's go!"}
          handleClick={this._handleSubmit}
        />
      </form>
    )
  }
}

export default UserForm