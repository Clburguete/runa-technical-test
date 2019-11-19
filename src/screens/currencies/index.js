//vendors
import { connect } from 'react-redux';
import {  withRouter } from 'react-router-dom';

import { CurrenciesView } from './currencies.view';

import * as USER_DUCK from '@store/ducks/user-form';
import * as CURRENCY_DUCK from '@store/ducks/currencies';

const mapStateToProps = state => ({
  userName: state.userForm.userName,
  currencies: state.currency.currencies
})

const mapDispatchToProps = dispatch => ({
  fetchCurrencies: () => dispatch(CURRENCY_DUCK.getCurrencies()),
  logout: () => dispatch(USER_DUCK.logout())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CurrenciesView));