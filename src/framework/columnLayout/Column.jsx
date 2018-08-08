
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Column = (props) => {
  const classes = classNames('column', `column--${props.width}`);

  return (
    <div
      className={classes}
    >
      {props.children}
    </div>
  );
};

Column.propTypes = {
  width: PropTypes.number.isRequired,
  children: PropTypes.any,
};

export default Column;
