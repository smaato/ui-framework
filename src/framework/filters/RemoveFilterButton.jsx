
import React, {
  PropTypes,
} from 'react';

const RemoveFilterButton = props => {
  return (
    <span
      className="icon glyphicons-remove-2 removeFilterButton"
      onClick={() => props.onRemove(props.id)}
    />
  );
};

RemoveFilterButton.propTypes = {
  id: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default RemoveFilterButton;
