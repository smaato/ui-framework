
import React, {
  PropTypes,
} from 'react';

import { Link } from 'react-router';

const NavButton = (props) => {
  return (
    <Link
      className="examplesNavButton"
      to={`/${props.path}`}
      onClick={props.onClick}
    >
      {props.path}
    </Link>
  );
};

NavButton.propTypes = {
  path: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NavButton;
