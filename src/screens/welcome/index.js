//vendors
import { connect } from 'react-redux';
import {  withRouter } from 'react-router-dom';

import { WelcomeView } from './welcome.view';

import {
  handleUserName,
  handleUserSubmit
} from "@store/actions";

const mapStateToProps = state => ({
  userName: state.userName,
  isUserLogged: state.isUserLogged
})

const mapDispatchToProps = dispatch => ({
  handleChange: val => dispatch(handleUserName(val)),
  handleSubmit: () => dispatch(handleUserSubmit()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WelcomeView));