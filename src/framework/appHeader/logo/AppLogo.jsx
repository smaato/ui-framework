
import PropTypes from 'prop-types';
import React from 'react';

const AppLogo = (props) => {
  const attributes = {
    "data-testid": "AppLogo",
    className: 'appLogo',
    title: props.text,
  };

  if (props.href) {
    return (
      <a href={props.href} {...attributes}>
        {props.text}
      </a>
    );
  }

  return (
    <span {...attributes}>
      {props.text}
    </span>
  );
};

AppLogo.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default AppLogo;
