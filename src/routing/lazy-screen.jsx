import React, { Component } from 'react';

export default class LazyScreen extends Component {

  static defaultProps = {
    root: 'screens/'
  }

  state = {
    screen: null
  };

  componentDidMount() {
    this.loadRoute(this.props.route, '');
  }

  shouldComponentUpdate = nextProps => {
    const isRouteUpdate = nextProps.route !== this.props.route;
    return isRouteUpdate;
  }

  componentDidUpdate = () => {
    const { route } = this.props;
    this.loadRoute(route);
  }

  async loadRoute(newValue) {
    const { root } = this.props;
    const screen = await import(`../${root}${newValue}`);
    this.setState({ screen: <screen.default /> });
  }

  render() {
    const { screen } = this.state;

    return screen ? screen : '';
  }

}