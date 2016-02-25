
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

export {
  default as AddOnSelect,
} from './AddOnSelect.jsx';

const AddOnControl = props => {
  let left;

  if (props.left) {
    const isLeftSideAComponent = typeof props.left === 'object';
    const classes = classNames('addOnControl__left', {
      'addOnControlSide--component': isLeftSideAComponent,
    });

    left = (
      <div className={classes}>
        {props.left}
      </div>
    );
  }

  let right;

  if (props.right) {
    const isRightSideAComponent = typeof props.right === 'object';
    const classes = classNames('addOnControl__right', {
      'addOnControlSide--component': isRightSideAComponent,
    });

    right = (
      <div className={classes}>
        {props.right}
      </div>
    );
  }

  return (
    <div className="addOnControl">
      {left}
      {props.children}
      {right}
    </div>
  );
};

AddOnControl.propTypes = {
  left: PropTypes.any,
  right: PropTypes.any,
};

export default AddOnControl;
