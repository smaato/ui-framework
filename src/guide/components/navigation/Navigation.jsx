
// Import exports from various modules.
import React, {
  Component,
  PropTypes,
} from 'react';

import NavButton from './NavButton.jsx';
import NavTitle from './NavTitle.jsx';

import classNames from 'classnames';

// Define the component class and provide it as an export.
export default class Navigation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
  }

  onToggleNav() {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen,
    });
  }

  onClickNavButton() {
    this.setState({
      isMenuOpen: false,
    });
  }

  render() {
    const addRoutesToNav = function addRoutesToNav(name, routeItems, navItems) {
      navItems.push(
        <NavTitle key={name}>{name}</NavTitle>
      );
      for (let i = 0; i < routeItems.length; i++) {
        const route = routeItems[i];
        navItems.push(
          <NavButton
            href={route.href}
            path={route.path}
            onClick={this.onClickNavButton.bind(this)}
            key={`${name}${i}`}
          >
            {route.name}
          </NavButton>
        );
      }
    }.bind(this);

    const navItems = [];

    addRoutesToNav('Components', this.props.componentRoutes, navItems);
    addRoutesToNav('Integrations', this.props.integrationRoutes, navItems);
    addRoutesToNav('Prototypes', this.props.prototypeRoutes, navItems);

    const navMenuClasses = classNames('examplesNavMenu', {
      'is-examples-nav-menu-visible': this.state.isMenuOpen,
    });

    const navMenu = (
      <div
        className={navMenuClasses}
      >
        {navItems}
      </div>
    );

    return (
      <div>
        <div
          className="examplesNavMenuButton"
          onClick={this.onToggleNav.bind(this)}
        >
          Nav
        </div>
        {navMenu}
      </div>
    );
  }

}

Navigation.propTypes = {
  componentRoutes: PropTypes.array,
  integrationRoutes: PropTypes.array,
  prototypeRoutes: PropTypes.array,
};
