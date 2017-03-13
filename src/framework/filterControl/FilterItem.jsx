
import React, {
  Component,
  PropTypes,
} from 'react';

import {
  Filter,
} from '../services';

import Entity from '../services/string/Entity';
import FilterForm from './forms/FilterForm.jsx';

export default class FilterItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: this.props.filter,
      isFormOpened: false,
    };
    this.onCancelEditing = this.onCancelEditing.bind(this);
    this.onEditFilter = this.onEditFilter.bind(this);
    this.onUpdateFilter = this.onUpdateFilter.bind(this);
    this.onRemoveSelectedFilter = this.onRemoveSelectedFilter.bind(this);
  }

  onCancelEditing() {
    this.setState({
      isFormOpened: false,
    });
  }

  onEditFilter() {
    this.setState({
      isFormOpened: true,
    });
  }

  onRemoveSelectedFilter() {
    this.props.onRemoveSelectedFilter(this.state.filter);
  }

  onUpdateFilter(oldFilter, filter) {
    this.props.onReplaceFilter(oldFilter, filter);
    this.setState({
      filter,
      isFormOpened: false,
    });
  }

  renderFilterForm() {
    const onUpdateFilter = filter =>
      this.onUpdateFilter(this.state.filter, filter);
    return (
      <FilterForm
        filterOption={this.state.filter.filterOption}
        comparisonValue={this.state.filter.comparisonValue}
        onAddFilter={onUpdateFilter}
      />
    );
  }

  renderForm() {
    return (
      <div className="filterFormDropdown filterFormDropdown--editing">
        <div className="filterFormDropdown__form">
          <div className="filterFormDropdown__form__header">
            <div className="filterFormDropdown__form__header__title">
              {this.state.filter.filterOption.name}
            </div>
            <span
              className="filterFormDropdown__form__header__closeButton"
              onClick={this.onCancelEditing}
            />
          </div>
          {this.renderFilterForm()}
        </div>
      </div>
    );
  }

  render() {
    const filterName = this.state.filter.filterOption.name;
    const title =
      `${filterName}: ${this.state.filter.humanizeComparisonValue()}`;

    return (
      <div className="filterItemContainer">
        <div className="filterItem">
          <span
            className="filterItem__label"
            onClick={this.onEditFilter}
            title={title}
          >
            <strong className="filterItem__name">
              {filterName}:
            </strong>
            {Entity.nbsp}
            {this.state.filter.humanizeComparisonValue()}
          </span>

          <div className="filterItem__removeButtonContainer">
            <span
              className="filterItem__removeButton"
              onClick={this.onRemoveSelectedFilter}
            />
          </div>
        </div>
        {this.state.isFormOpened &&
          this.renderForm()
        }
      </div>
    );
  }
}

FilterItem.propTypes = {
  filter: PropTypes.instanceOf(Filter).isRequired,
  onRemoveSelectedFilter: PropTypes.func.isRequired,
  onReplaceFilter: PropTypes.func.isRequired,
};
