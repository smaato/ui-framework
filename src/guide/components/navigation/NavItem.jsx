
import React, {
  PropTypes,
} from 'react';

import { Link } from 'react-router';

const NavItem = (props) => {
  if (props.href) {
    return (
      <a
        className="examplesNavItem"
        target="_blank"
        href={props.href}
        onClick={props.onClick}
      >
        {props.children}
      </a>
    );
  }

  return (
    <Link
      className="examplesNavItem"
      to={`/${props.path}`}
      onClick={props.onClick}
    >
      {props.children}
    </Link>
  );
};

NavItem.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  path: PropTypes.string,
  href: PropTypes.string,
};

export default NavItem;
