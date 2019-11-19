//vendors
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { DashboardView } from './dashboard.view';

import * as CURRENCY_DUCK from '@store/ducks/currencies';

const mapStateToProps = state => ({
  userName: state.userForm.userName,
  selectedCurrency: state.currency.selectedCurrency,
  spotPrice: state.currency.spotPrice,
  buyPrice: state.currency.buyPrice
})

const mapDispatchToProps = dispatch => ({
  fetchSpotPrice: () => dispatch(CURRENCY_DUCK.getSpotPrice()),
  fetchBuyPrice: curr => dispatch(CURRENCY_DUCK.getBuyPrice(curr))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DashboardView));