//vendors
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { RouteGuard } from './route.guard';
import { mapStateToProps, mapDispatchToProps } from '@store';

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RouteGuard));