
import PropTypes from 'prop-types';
import React, {
  Component,
} from 'react';

import SearchBox from '../searchBox/SearchBox.jsx';

export {
  default as OrganizationSwitcherItem,
} from './OrganizationSwitcherItem.jsx';

class OrganizationSwitcher extends Component {

  componentWillMount() {
    document.querySelector('body')
      .classList.add('is-organization-switcher-open');
  }

  componentWillUnmount() {
    document.querySelector('body')
      .classList.remove('is-organization-switcher-open');
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
      <div data-testid="OrganizationSwitcher" className="organizationSwitcher">
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
