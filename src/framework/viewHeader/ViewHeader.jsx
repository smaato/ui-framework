
import React, {
  PropTypes,
} from 'react';

export {
  default as ViewHeaderNav,
} from './ViewHeaderNav.jsx';

const ViewHeader = props => {
  return (
    <div className="viewHeader">
      <div className="viewHeader__liner">
        {props.left}
        {props.right}
      </div>
    </div>
  );
};

ViewHeader.propTypes = {
  left: PropTypes.element,
  right: PropTypes.element,
};

export default ViewHeader;
