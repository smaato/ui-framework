
import PropTypes from 'prop-types';
import React from 'react';

const FormPanel = props => (
  <div className="formPanel">
    {props.children}
  </div>
);

FormPanel.propTypes = {
  children: PropTypes.any,
};

export default FormPanel;
