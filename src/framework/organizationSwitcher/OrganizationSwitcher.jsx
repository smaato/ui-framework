
import React, {
  Component,
  PropTypes,
} from 'react';

import $ from 'jquery';

import SearchBox from '../searchBox/SearchBox.jsx';

export {
  default as OrganizationSwitcherItem,
} from './OrganizationSwitcherItem.jsx';

class OrganizationSwitcher extends Component {

  componentWillMount() {
    $('body').addClass('is-organization-switcher-open');
  }

  componentWillUnmount() {
    $('body').removeClass('is-organization-switcher-open');
  }

  render() {
    let searchBox;

    if (this.props.onSearch) {
      searchBox = (
        <div className="organizationSwitcher__search">
          <SearchBox
            onSearch={this.props.onSearch}
            placeholder={this.props.searchPrompt}
            isImmediate
            isFullWidth
          />
        </div>
      );
    }

    return (
      <div className="organizationSwitcher">
        <div className="organizationSwitcher__title">
          {this.props.title}
          <div
            className="organizationSwitcher__closeButton"
            onClick={this.props.onClose}
          />
        </div>

        <div className="organizationSwitcher__body">
          {searchBox}

          <div className="organizationSwitcher__list">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

OrganizationSwitcher.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
  searchPrompt: PropTypes.string,
  onClose: PropTypes.func,
  onSearch: PropTypes.func,
};

export default OrganizationSwitcher;
