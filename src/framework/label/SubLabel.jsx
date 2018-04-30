
import React, {
  PropTypes,
} from 'react';

const SubLabel = props => (
  <div className={`subLabel ${props.className ? props.className : ''}`}>
    {props.children}
  </div>
);

SubLabel.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default SubLabel;
