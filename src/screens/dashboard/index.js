//vendors
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { DashboardView } from './dashboard.view';
import { mapStateToProps, mapDispatchToProps } from './../../store';

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DashboardView));