//vendors
import React, { Component } from 'react';

export class ErrorBoundary extends Component {

  static getDerivedStateFromError(error) {
    console.log('get derived error ', error);
    return {
      error: true,
    };
  }

  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error, errorInfo) {
    console.log('error', error);
    console.log('errorinfo', errorInfo);
  }

  render() {
    const { errorType, children } = this.props;

    if (this.state.error) {
      return (
        <h2>This is error</h2>
      )
    }

    return children;
  }
}