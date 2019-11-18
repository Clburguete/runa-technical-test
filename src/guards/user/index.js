//vendors
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { UserGuard } from './user.guard';
import { mapStateToProps, mapDispatchToProps } from './../../store';

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserGuard));