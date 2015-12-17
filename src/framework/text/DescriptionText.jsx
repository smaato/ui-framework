
import React, {
  PropTypes,
} from 'react';

const DescriptionText = props => {
  return (
    <div className="descriptionText">
      {props.children}
    </div>
  );
};

DescriptionText.propTypes = {
  children: PropTypes.string,
};

export default DescriptionText;
