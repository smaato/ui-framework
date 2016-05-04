
import React, {
  PropTypes,
} from 'react';

const DescriptionText = props => (
  <div className="descriptionText">
    {props.children}
  </div>
);

DescriptionText.propTypes = {
  children: PropTypes.any,
};

export default DescriptionText;
