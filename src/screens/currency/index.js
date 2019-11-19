//vendors
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { CurrencyView } from './currency.view';

import * as USER_DUCK from '@store/ducks/user-form';
import * as CURRENCY_DUCK from '@store/ducks/currencies';

const mapStateToProps = state => ({
  userName: state.userForm.userName,
  exchangeRates: state.currency.exchangeRates
})

const mapDispatchToProps = dispatch => ({
  fetchExchangeRate: (currencyId) => dispatch(CURRENCY_DUCK.getExchangeRates(currencyId)),
  logout: () => dispatch(USER_DUCK.logout())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CurrencyView));