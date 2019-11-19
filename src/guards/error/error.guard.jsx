//vendors
import React, { Component } from 'react';

import { Error } from '@components';

export class ErrorBoundary extends Component {

  static getDerivedStateFromError(error) {
    return {
      error: true,
    };
  }

  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  navToDashboard = () => this.props.history.push(ROUTES.dashboard.path)
  render() {
    const { children } = this.props;

    if (this.state.error) {
      return (
        <Error/>
      )
    }

    return children;
  }
}