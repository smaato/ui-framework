
import React, {
  PropTypes,
} from 'react';

const SubLabel = props => (
  <div className="subLabel">
    {props.children}
  </div>
);

SubLabel.propTypes = {
  children: PropTypes.any,
};

export default SubLabel;
