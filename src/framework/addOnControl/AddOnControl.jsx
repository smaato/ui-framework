
import React from 'react';

export {
  default as AddOnDropdown,
} from './dropdown/AddOnDropdown.jsx';

export {
  default as AddOnDropdownOption,
} from './dropdown/AddOnDropdownOption.jsx';

export {
  default as AddOnLabel,
} from './label/AddOnLabel.jsx';

const AddOnControl = props => {
  return (
    <div className="addOnControl">
      {props.children}
    </div>
  );
};

export default AddOnControl;
