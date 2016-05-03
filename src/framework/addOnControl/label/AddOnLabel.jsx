
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

const AddOnLabel = props => {
  const classes = classNames('addOnLabel', {
    'addOnLabel--left': props.isLeftSide,
    'addOnLabel--right': props.isRightSide,
  });

  return (
    <div
      className={classes}
    >
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
