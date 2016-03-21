
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

const PickedSummary = props => {
  const iconClasses = classNames('pickedSummaryIcon', {
    'pickedSummaryIcon--check glyphicons-ok-2': props.isAllowed,
    'pickedSummaryIcon--ban glyphicons-ban': !props.isAllowed,
  });

  return (
    <div className="pickedSummary">
      <div className={iconClasses} />
      <div className="pickedSummary__label">
        {props.children}
      </div>
    </div>
  );
};

PickedSummary.propTypes = {
  children: PropTypes.string,
  isAllowed: PropTypes.bool,
};

export default PickedSummary;
