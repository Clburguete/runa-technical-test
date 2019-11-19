//vendors
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { DashboardView } from './dashboard.view';

import * as USER_DUCK from '@store/ducks/user-form';
import * as CURRENCY_DUCK from '@store/ducks/currencies';

const mapStateToProps = state => ({
  userName: state.userForm.userName,
  selectedCurrency: state.currency.selectedCurrency,
  spotPrice: state.currency.spotPrice
})

const mapDispatchToProps = dispatch => ({
  fetchSpotPrice: () => dispatch(CURRENCY_DUCK.getSpotPrice()),
  logout: () => dispatch(USER_DUCK.logout())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DashboardView));