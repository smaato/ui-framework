
import React, {
  PropTypes,
} from 'react';

const FormPanel = props => (
  <div className="formPanel">
    {props.children}
  </div>
);

FormPanel.propTypes = {
  children: PropTypes.any,
};

export default FormPanel;
