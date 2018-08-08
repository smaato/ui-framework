
import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const AddOnLabel = (props) => {
  const classes = classNames('addOnLabel', {
    'addOnLabel--left': props.isLeftSide,
    'addOnLabel--right': props.isRightSide,
  });

  return (
    <div className={classes}>
      {props.children}
    </div>
  );
};

AddOnLabel.propTypes = {
  children: PropTypes.any,
  isLeftSide: PropTypes.bool,
  isRightSide: PropTypes.bool,
};

export default AddOnLabel;
