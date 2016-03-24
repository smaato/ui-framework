
import React, {
  PropTypes,
} from 'react';

const FieldMessage = props => (
  <div
    data-id={props.dataId}
    className="fieldMessage"
  >
    {props.message}
  </div>
);

FieldMessage.propTypes = {
  dataId: PropTypes.string,
  message: PropTypes.string.isRequired,
};

export default FieldMessage;
