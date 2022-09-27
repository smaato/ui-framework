
import PropTypes from 'prop-types';
import React from 'react';

import classNames from 'classnames';

const AppNav = (props) => {
  const links = props.links.map((link, index) => (
    React.createElement(props.linkType, Object.assign({}, link, {
      className: classNames('appNav__link', link.className),
      key: index,
    }))
  ));

  return (
    <nav className="appNav">
      {links}
    </nav>
  );
};

AppNav.propTypes = {
  linkType: PropTypes.object,
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
};

AppNav.ACTIVE_LINK_CLASS_NAME = 'is-app-nav-link-selected';

export default AppNav;
