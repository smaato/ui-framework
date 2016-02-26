
import React, {
  PropTypes,
} from 'react';

import GroupedButton from '../button/GroupedButton.jsx';

const ButtonGroup = props => {
  return (
    <div className="buttonGroup">
      {props.children}
    </div>
  );
};

ButtonGroup.propTypes = {
  children: PropTypes.arrayOf(GroupedButton),
};

export default ButtonGroup;
