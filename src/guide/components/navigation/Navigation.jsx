
// Import exports from various modules.
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, {
  Component,
} from 'react';

import NavItem from './NavItem.jsx';
import NavTitle from './NavTitle.jsx';

// Define the component class and provide it as an export.
export default class Navigation extends Component {

  renderNavMenu(name, routeItems) {
    // Add items.
    const navItems = routeItems.map((route, index) => (
      <NavItem
        href={route.href}
        path={route.path}
        onClick={this.props.onClickNavItem}
        key={`${name}${index}`}
      >
        {route.name}
      </NavItem>
    ));

    // Add title at the top.
    navItems.unshift(
      <NavTitle key={name}>
        {name}
      </NavTitle>
    );

    return (
      <div className="examplesNavMenu">
        {navItems}
      </div>
    );
  }

  render() {
    const componentNavMenu = this.renderNavMenu(
      'Components',
      this.props.componentRoutes
    );

    const integrationNavMenu = this.renderNavMenu(
      'Integrations',
      this.props.integrationRoutes
    );

    const navClasses = classNames('examplesNav', {
      'is-examples-nav-visible': this.props.isMenuOpen,
    });

    return (
      <div className={navClasses}>
        <div className="examplesNavMenusContainer">
          {componentNavMenu}
          {integrationNavMenu}
        </div>
      </div>
    );
  }

}

Navigation.propTypes = {
  isMenuOpen: PropTypes.bool,
  onClickNavItem: PropTypes.func,
  componentRoutes: PropTypes.array,
  integrationRoutes: PropTypes.array,
};
