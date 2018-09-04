
import PropTypes from 'prop-types';
import React, {
  Component,
} from 'react';

import {
  FilterOption,
} from '../../services';

import FilterForm from '../forms/FilterForm.jsx';

export default class FilterFormDropdown extends Component {

  renderFilterForm() {
    return (
      <FilterForm
        filterOption={this.props.filterOption}
        onAddFilter={this.props.onAddFilter}
      />
    );
  }

  render() {
    return (
      <div className="filterFormDropdown">
        <div className="filterFormDropdown__form">
          <div className="filterFormDropdown__form__header">
            <span
              className="filterFormDropdown__form__header__backButton"
              onClick={this.props.onBackButtonClick}
            />
            <div className="filterFormDropdown__form__header__title">
              {this.props.filterOption.name}
            </div>
          </div>
          {this.renderFilterForm()}
        </div>
      </div>
    );
  }
}

FilterFormDropdown.propTypes = {
  filterOption: PropTypes.instanceOf(FilterOption),
  onAddFilter: PropTypes.func.isRequired,
  onBackButtonClick: PropTypes.func.isRequired,
};
