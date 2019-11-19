//vendors
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { RouteGuard } from './route.guard';


const mapStateToProps = state => {
  return ({
    isUserLogged: state.userForm.isUserLogged
  })
}


export default withRouter(connect(mapStateToProps)(RouteGuard));