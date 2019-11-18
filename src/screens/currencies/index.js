//vendors
import { connect } from 'react-redux';
import {  withRouter } from 'react-router-dom';

import { CurrenciesView } from './currencies.view';

import { fetchCurrencies, logout } from '@store/actions';

const mapStateToProps = state => ({
  userName: state.userName,
  currencies: state.currencies
})

const mapDispatchToProps = dispatch => ({
  fetchCurrencies: () => dispatch(fetchCurrencies()),
  logout: () => dispatch(logout())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CurrenciesView));