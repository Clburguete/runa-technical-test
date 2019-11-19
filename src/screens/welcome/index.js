//vendors
import { connect } from 'react-redux';
import {  withRouter } from 'react-router-dom';

import { WelcomeView } from './welcome.view';

import * as DUCK from "@store/ducks/user-form";

const mapStateToProps = state => {
  console.log(state);
  return ({
  userName: state.userForm.userName,
  isUserLogged: state.userForm.isUserLogged
})}

const mapDispatchToProps = dispatch => ({
  handleChange: val => dispatch(DUCK.handleUserName(val)),
  handleSubmit: () => dispatch(DUCK.login()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WelcomeView));