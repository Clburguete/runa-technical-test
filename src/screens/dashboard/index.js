//vendors
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { DashboardView } from './dashboard.view';

import { logout, fetchSpotPrice } from '@store/actions';

const mapStateToProps = state => ({
  userName: state.userName,
  selectedCurrency: state.selectedCurrency,
  spotPrice: state.spotPrice
})

const mapDispatchToProps = dispatch => ({
  fetchSpotPrice: () => dispatch(fetchSpotPrice()),
  logout: () => dispatch(logout())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DashboardView));