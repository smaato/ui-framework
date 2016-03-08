
import React, {
  PropTypes,
} from 'react';

const SubLabel = props => (
  <div className="subLabel">
    {props.children}
  </div>
);

SubLabel.propTypes = {
  children: PropTypes.string.isRequired,
};

export default SubLabel;
