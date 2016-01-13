
import React, {
  PropTypes,
} from 'react';

import SearchBox from '../searchBox/SearchBox.jsx';

export {
  default as OrganizationSwitcherItem,
} from './OrganizationSwitcherItem.jsx';

const OrganizationSwitcher = props => {
  let searchBox;

  if (props.onSearch) {
    searchBox = (
      <div className="organizationSwitcher__search">
        <SearchBox
          onSearch={props.onSearch}
          placeholder={props.searchPrompt}
          isImmediate
          isFullWidth
        />
      </div>
    );
  }

  return (
    <div className="organizationSwitcher">
      <div className="organizationSwitcher__title">
        {props.title}
        <div
          className="organizationSwitcher__closeButton"
          onClick={props.onClose}
        />
      </div>

      <div className="organizationSwitcher__body">
        {searchBox}

        <div className="organizationSwitcher__list">
          {props.children}
        </div>
      </div>
    </div>
  );
};

OrganizationSwitcher.propTypes = {
  title: PropTypes.string,
  searchPrompt: PropTypes.string,
  onClose: PropTypes.func,
  onSearch: PropTypes.func,
};

export default OrganizationSwitcher;
