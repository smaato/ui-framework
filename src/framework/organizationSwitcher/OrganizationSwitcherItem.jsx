
import React from 'react';
import PropTypes from 'prop-types';

const OrganizationSwitcherItem = (props) => {
  if (props.message) {
    return (
      <div className="organizationSwitcherItem">
        {props.message}
      </div>
    );
  }

  function onSelect() {
    if (props.onSelect) {
      props.onSelect(props.data);
    }
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
          onClick={onSelect}
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
  data: PropTypes.any,
  message: PropTypes.string,
};

export default OrganizationSwitcherItem;
