
import React, {
  PropTypes,
} from 'react';

const AddOnControl = props => {
  let left;

  if (props.left) {
    left = (
      <div className="addOnControl__left">
        {props.left}
      </div>
    );
  }

  let right;

  if (props.right) {
    right = (
      <div className="addOnControl__right">
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
