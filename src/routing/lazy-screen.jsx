import React, { Component } from 'react';

export default class LazyScreen extends Component {

  static defaultProps = {
    root: 'screens/',
    route: ''
  }

  state = {
    screen: null
  };

  componentDidMount = () => this.loadRoute(this.props.route,'');

  componentDidUpdate = prevProps => {
    const { route } = this.props;
    this.loadRoute(route, prevProps.route);
  }

  async loadRoute(newRoute, oldRoute) {
    const
      isRouteUpdate = newRoute !== oldRoute,
      { root } = this.props;

    if(!isRouteUpdate) return;

    const screen = await import(`../${root}${newRoute}`);

    this.setState({ screen: <screen.default />, });
  }

  render() {
    const { screen } = this.state;

    return screen ? screen : '';
  }

}