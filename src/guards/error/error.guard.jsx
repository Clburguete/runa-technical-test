//vendors
import React, { Component } from 'react';

import { ROUTES } from '@routing';

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

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
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