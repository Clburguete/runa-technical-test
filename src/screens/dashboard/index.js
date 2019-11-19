//vendors
import { connect } from 'react-redux';

import { DashboardView } from './dashboard.view';

import * as USER_DUCK from '@store/ducks/user-form';
import * as CURRENCY_DUCK from '@store/ducks/currencies';

const mapStateToProps = state => ({
  userName: state.userForm.userName,
  selectedCurrency: state.currency.selectedCurrency,
  spotPrice: state.currency.spotPrice
})

const mapDispatchToProps = dispatch => ({
  fetchSpotPrice: () => dispatch(CURRENCY_DUCK.getSpotPrice())
})

export default connect(mapStateToProps, mapDispatchToProps)(DashboardView);