
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const ViewHeaderNav = (props) => {
  const links = props.links.map((link, index) => (
    React.createElement(props.linkType, Object.assign({}, link, {
      className: classNames('viewHeaderNav__link', link.className),
      key: index,
    }))
  ));

  return (
    <nav className="viewHeaderNav">
      {links}
    </nav>
  );
};

ViewHeaderNav.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
};

ViewHeaderNav.ACTIVE_LINK_CLASS_NAME = 'is-view-header-nav-link-selected';

export default ViewHeaderNav;
