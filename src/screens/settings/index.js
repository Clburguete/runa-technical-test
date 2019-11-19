//vendors
import { connect } from 'react-redux';
import {  withRouter } from 'react-router-dom';

import { SettingsView } from './settings.view';

import * as USER_DUCK from '@store/ducks/user-form';
import * as CURRENCY_DUCK from '@store/ducks/currencies';

const mapStateToProps = state => ({
  selectedCurrency: state.currency.selectedCurrency,
  userName: state.userForm.userName,
  currencies: state.currency.currencies
})

const mapDispatchToProps = dispatch => ({
  selectDefaultCurr: curr => dispatch(CURRENCY_DUCK.setDefaultCurr(curr)),
  fetchCurrencies: () => dispatch(CURRENCY_DUCK.getCurrencies()),
  logout: () => dispatch(USER_DUCK.logout())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SettingsView));