//vendors
import { connect } from 'react-redux';
import {  withRouter } from 'react-router-dom';

import { mapStateToProps, mapDispatchToProps } from './../../store';
import { CurrenciesView } from './currencies.view';

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CurrenciesView));