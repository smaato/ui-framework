
import React, {
  PropTypes,
} from 'react';

import classNames from 'classnames';

const ViewHeaderNav = props => {
  const links = props.links.map((link, index) => {
    return React.createElement(props.linkType, Object.assign({}, link, {
      className: classNames('viewHeaderNav__link', link.className),
      key: index,
    }));
  });

  return (
    <nav className="viewHeaderNav">
      {links}
    </nav>
  );
};

ViewHeaderNav.propTypes = {
  linkType: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]).isRequired,
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ViewHeaderNav;
