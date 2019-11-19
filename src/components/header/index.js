//vendors
import { connect } from 'react-redux';
import {  withRouter } from 'react-router-dom';

import { Header } from './header.component';

import * as USER_DUCK from '@store/ducks/user-form';

const mapStateToProps = state => ({
  userName: state.userForm.userName
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(USER_DUCK.logout())
})

const connectedHeader = withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));

export {connectedHeader as Header}; 

