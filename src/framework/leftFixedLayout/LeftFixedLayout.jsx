
import React, {
  PropTypes,
} from 'react';

const LeftFixedLayout = props => (
  <div className="leftFixedLayout">
    <div className="leftFixedLayout__leftSide">
      {props.left}
    </div>

    <div className="leftFixedLayout__rightSide">
      {props.right}
    </div>
  </div>
);

LeftFixedLayout.propTypes = {
  left: PropTypes.any,
  right: PropTypes.any,
};

export default LeftFixedLayout;
