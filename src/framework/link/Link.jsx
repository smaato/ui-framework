
import React from 'react';
import PropTypes from 'prop-types';

const Link = (props) => {
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
      data-id={props.dataId}
      target={props.target}
    >
      {props.children}
    </a>
  );
};

Link.propTypes = {
  dataId: PropTypes.string,
  children: PropTypes.any,
  href: PropTypes.string,
  onClick: PropTypes.func,
  data: PropTypes.any,
  target: PropTypes.string,
};

export default Link;
