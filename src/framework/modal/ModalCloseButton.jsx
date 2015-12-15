
import React, {
  PropTypes,
} from 'react';

import HollowButton from '../button/HollowButton.jsx';

const ModalCloseButton = props => {
  return (
    <HollowButton
      label={props.label}
      onClick={props.onClick}
    />
  );
};

ModalCloseButton.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
};

ModalCloseButton.defaultProps = {
  label: 'Cancel',
};

export default ModalCloseButton;
