
// Import exports from various modules.
import React, {
  Component,
  PropTypes,
} from 'react';

import NavItem from './NavItem.jsx';
import NavTitle from './NavTitle.jsx';

import classNames from 'classnames';

// Define the component class and provide it as an export.
export default class Navigation extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const addRoutesToNav = (name, routeItems, navItems) => {
      navItems.push(
        <NavTitle key={name}>{name}</NavTitle>
      );
      for (let i = 0; i < routeItems.length; i++) {
        const route = routeItems[i];
        navItems.push(
          <NavItem
            href={route.href}
            path={route.path}
            onClick={this.props.onClickNavItem}
            key={`${name}${i}`}
          >
            {route.name}
          </NavItem>
        );
      }
    };

    const componentNavItems = [];
    addRoutesToNav('Components', this.props.componentRoutes, componentNavItems);

    const integrationNavItems = [];
    addRoutesToNav(
      'Integrations',
      this.props.integrationRoutes,
      integrationNavItems
    );

    const componentNavMenu = (
      <div
        className="examplesNavMenu"
      >
        {componentNavItems}
      </div>
    );

    const integrationNavMenu = (
      <div
        className="examplesNavMenu"
      >
        {integrationNavItems}
      </div>
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
