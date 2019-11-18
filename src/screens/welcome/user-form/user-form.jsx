//vendors
import React, { Component } from 'react';
import { connect } from 'react-redux';
//components
import { 
  Input,
  Button
} from './../../../components';

class UserForm extends Component {

  render = () => (
    <form>
      <Input
        label='Please enter your username'
        value={userName}
        handleChange={}
      />
      <Button
        text="Let's go!"

      />
    </form>
  )
}

const mapStateToProps = state => {

}

const mapDispatchToProps = dispatch => {

}

export default connect(mapStateToProps,mapDispatchToProps)(UserForm);