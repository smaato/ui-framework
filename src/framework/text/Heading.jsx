import classNames from 'classnames';
import keyMirror from 'keymirror';
import PropTypes from 'prop-types';
import React from 'react';

const Heading = (props) => {
  const sizeClassMap = {
    [Heading.SIZE.LARGE]: 'heading--large',
    [Heading.SIZE.SMALL]: 'heading--small',
  };

  const classes = classNames('heading', sizeClassMap[props.size]);

  return (
    <div className={classes}>
      {props.children}
    </div>
  );
};

Heading.SIZE = keyMirror({
  LARGE: null,
  SMALL: null,
});

Heading.propTypes = {
  children: PropTypes.any,
  size: PropTypes.string,
};

Heading.defaultProps = {
  size: Heading.SIZE.LARGE,
};

export default Heading;
