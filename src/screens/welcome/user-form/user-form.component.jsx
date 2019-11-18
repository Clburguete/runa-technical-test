//vendors
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

//config
import { ROUTES } from './../../../config'

//components
import { 
  Input,
  Button
} from './../../../components';

class UserForm extends Component {

  _handleSubmit = () => {
    const { handleSubmit, history } = this.props;
    handleSubmit();
    history.push('/dashboard')
  }

  render = () => {
    const { 
      handleChange,
      handleSubmit,
      userName
    } = this.props;

  console.log(this.props);

    return (
      <form>
        <Input
          label='Please enter your username'
          value={userName}
          handleChange={val => handleChange(val)}
        />
        <Button
          text="Let's go!"
          handleClick={this._handleSubmit}
        />
      </form>
    )
  }
}

export default UserForm