
import React, {
  PropTypes,
} from 'react';

const ModalFooter = props => {
  return (
    <div className="modalFooter">
      {props.children}
    </div>
  );
};

ModalFooter.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]).isRequired,
};

export default ModalFooter;
