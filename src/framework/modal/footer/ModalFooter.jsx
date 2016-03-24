
import React, {
  PropTypes,
} from 'react';

const ModalFooter = props => {
  let left;

  if (props.left) {
    left = (
      <div className="modalFooterSection modalFooterSection--left">
        {props.left}
      </div>
    );
  }

  const right = (
    <div className="modalFooterSection modalFooterSection--right">
      {props.right}
    </div>
  );

  return (
    <div className="modalFooterContainer">
      <div className="modalFooter">
        {left}
        {right}
      </div>
    </div>
  );
};

ModalFooter.propTypes = {
  left: PropTypes.any,
  right: PropTypes.any.isRequired,
};
export default ModalFooter;
