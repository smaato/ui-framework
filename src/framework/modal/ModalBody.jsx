
import React, {
  PropTypes,
} from 'react';

const ModalBody = props => {
  return (
    <div className="modalBody">
      {props.children}
    </div>
  );
};

ModalBody.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]).isRequired,
};

export default ModalBody;
