
import React, {
  PropTypes,
} from 'react';

const OrganizationSwitcherItem = props => {
  if (props.message) {
    return (
      <div className="organizationSwitcherItem">
        {props.message}
      </div>
    );
  }

  return (
    <div className="organizationSwitcherItem">
      <div
        className="organizationSwitcherItem__name"
        title={props.name}
      >
        {props.name}
      </div>

      <div
        className="organizationSwitcherItem__id"
        title={props.id}
      >
        {props.id}
      </div>

      <div
        className="organizationSwitcherItem__switch"
      >
        <span
          className="organizationSwitcherItem__switchButton"
          onClick={props.onSelect}
        >
          Switch
        </span>
      </div>
    </div>
  );
};

OrganizationSwitcherItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  onSelect: PropTypes.func,
  message: PropTypes.string,
};

export default OrganizationSwitcherItem;
