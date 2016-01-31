
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

  return (
    <div className="modalFooter">
      {left}
      <div className="modalFooterSection modalFooterSection--right">
        {props.children}
      </div>
    </div>
  );
};

ModalFooter.propTypes = {
  left: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]),
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]).isRequired,
};

export default ModalFooter;
