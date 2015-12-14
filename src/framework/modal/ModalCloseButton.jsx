
import React, {
  PropTypes,
} from 'react';

import HollowButton from '../button/HollowButton.jsx';

const ModalCloseButton = props => {
  return (
    <HollowButton
      label="Cancel"
      onClick={props.onClick}
    />
  );
};

ModalCloseButton.propTypes = {
  onClick: PropTypes.func,
};

export default ModalCloseButton;
