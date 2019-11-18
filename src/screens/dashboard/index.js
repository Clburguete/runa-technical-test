import { connect } from 'react-redux';
import { DashboardView } from './dashboard.view';
import { mapStateToProps, mapDispatchToProps } from '../../store';

export default connect(mapStateToProps, mapDispatchToProps)(DashboardView);