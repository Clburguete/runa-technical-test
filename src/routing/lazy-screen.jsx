//vendors
import React, { Component } from 'react';
//components
import { Link } from './../components';

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
    const isRouteUpdate = newRoute !== oldRoute;
    
    if(!isRouteUpdate) return;

    const 
      { root } = this.props,
      screen = await import(`../${root}${newRoute}`);

    this.setState({ screen: <screen.default />, });
  }

  render() {
    const 
      { screen } = this.state,
      { history, route } = this.props;

    return !screen ? '' :
    <>
      {
        route !== 'welcome' &&
        <Link
          text={'Return'}
          handleClick={history.goBack}
        />
      }

      {screen}
    </>;
  }

}