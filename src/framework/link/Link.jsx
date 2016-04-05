
import React, {
  PropTypes,
} from 'react';

const Link = props => {
  function onClick() {
    if (props.onClick) {
      props.onClick(props.data);
    }
  }

  return (
    <a
      className="link"
      href={props.href}
      onClick={onClick}
    >
      {props.children}
    </a>
  );
};

Link.propTypes = {
  children: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  data: PropTypes.any,
};

export default Link;
