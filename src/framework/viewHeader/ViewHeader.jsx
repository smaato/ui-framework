
import PropTypes from 'prop-types';
import React from 'react';

export {
  default as ViewHeaderNav,
} from './nav/ViewHeaderNav.jsx';

export {
  default as DateRange,
} from './dateRange/DateRange.jsx';

const ViewHeader = props => (
  <div data-testid="ViewHeader" className="viewHeader">
    <div className="viewHeader__liner">
      {props.left}
      {props.right}
    </div>
  </div>
);

ViewHeader.propTypes = {
  left: PropTypes.element,
  right: PropTypes.element,
};

export default ViewHeader;
