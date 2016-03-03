
import React, {
  PropTypes,
} from 'react';

const FieldMessage = props => (
  <div className="fieldMessage">
    {props.message}
  </div>
);

FieldMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default FieldMessage;
