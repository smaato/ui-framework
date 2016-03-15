
import React, {
  PropTypes,
} from 'react';

const ModalBody = props => (
  <div className="modalBody">
    {props.children}
  </div>
);

ModalBody.propTypes = {
  children: PropTypes.any.isRequired,
};

export default ModalBody;
