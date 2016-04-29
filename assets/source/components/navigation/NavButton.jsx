
import React, {
  PropTypes,
} from 'react';

import { Link } from 'react-router';

const NavButton = (props) => {
  if (props.href) {
    return (
      <a
        className="examplesNavButton"
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
      className="examplesNavButton"
      to={`/${props.path}`}
      onClick={props.onClick}
    >
      {props.children}
    </Link>
  );
};

NavButton.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  path: PropTypes.string,
  href: PropTypes.string,
};

export default NavButton;
