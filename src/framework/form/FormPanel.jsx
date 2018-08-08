
import React from 'react';
import PropTypes from 'prop-types';

const FormPanel = props => (
  <div className="formPanel">
    {props.children}
  </div>
);

FormPanel.propTypes = {
  children: PropTypes.any,
};

export default FormPanel;
