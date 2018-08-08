
import React from 'react';
import PropTypes from 'prop-types';

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
