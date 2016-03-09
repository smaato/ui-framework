
import React, {
  PropTypes,
} from 'react';

const Link = props => (
  <a
    className="link"
    href={props.href}
    onClick={props.onClick}
  >
    {props.children}
  </a>
);

Link.propTypes = {
  children: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
};

export default Link;
