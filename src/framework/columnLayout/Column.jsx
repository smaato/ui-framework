
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

const Column = props => {
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
