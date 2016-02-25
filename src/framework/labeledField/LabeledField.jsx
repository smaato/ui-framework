
import React, {
  PropTypes,
} from 'react';

import Label from '../label/Label.jsx';

const LabeledField = props => {
  return (
    <div>
      <div className="labeledField__label">
        <Label>
          {props.label}
        </Label>
      </div>
      {props.children}
    </div>
  );
};

LabeledField.propTypes = {
  label: PropTypes.string,
};

export default LabeledField;
