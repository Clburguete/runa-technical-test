//vendors
import React, { Component } from 'react';

//components
import { MainContainer } from '@components';

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

  render() {
    const { children } = this.props;

    if (this.state.error) {
      return (
        <MainContainer>
          <h2>Ooops...something went wrong. Sorry!</h2>
        </MainContainer>
      )
    }

    return children;
  }
}