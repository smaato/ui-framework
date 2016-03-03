
import React, {
  PropTypes,
} from 'react';

const AppHeaderDivider = props => (
  <div className="appHeaderDivider">
    {props.left}
    <div className="appHeaderDivider__divider"></div>
    {props.right}
  </div>
);

AppHeaderDivider.propTypes = {
  left: PropTypes.element.isRequired,
  right: PropTypes.element.isRequired,
};

export default AppHeaderDivider;
