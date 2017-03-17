
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
      isFormOpen: false,
    };

    this.onCancelEditing = this.onCancelEditing.bind(this);
    this.onEditFilter = this.onEditFilter.bind(this);
    this.onRemoveSelectedFilter = this.onRemoveSelectedFilter.bind(this);
    this.onUpdateFilter = this.onUpdateFilter.bind(this);
  }

  onCancelEditing() {
    this.setState({
      isFormOpen: false,
    });
  }

  onEditFilter() {
    this.setState({
      isFormOpen: true,
    });
  }

  onRemoveSelectedFilter() {
    this.props.onRemoveSelectedFilter(this.props.filter);
  }

  onUpdateFilter(oldFilter, filter) {
    this.props.onReplaceFilter(oldFilter, filter);
    this.setState({
      isFormOpen: false,
    });
  }

  renderFilterForm() {
    const onUpdateFilter =
      filter => this.onUpdateFilter(this.props.filter, filter);

    return (
      <FilterForm
        comparisonValue={this.props.filter.comparisonValue}
        filterOption={this.props.filter.filterOption}
        onAddFilter={onUpdateFilter}
      />
    );
  }

  renderForm() {
    if (!this.state.isFormOpen) {
      return undefined;
    }

    return (
      <div className="filterFormDropdown filterFormDropdown--editing">
        <div className="filterFormDropdown__form">
          <div className="filterFormDropdown__form__header">
            <div className="filterFormDropdown__form__header__title">
              {this.props.filter.filterOption.name}
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

  renderFilterItem() {
    const filterName = this.props.filter.filterOption.name;
    const title =
      `${filterName}: ${this.props.filter.humanizeComparisonValue()}`;

    return (
      <div className="filterItem button">
        <span
          className="filterItem__label"
          onClick={this.onEditFilter}
          title={title}
        >
          <strong className="filterItem__name">
            {filterName}:
          </strong>
          {Entity.nbsp}
          {this.props.filter.humanizeComparisonValue()}
        </span>

        <div className="filterItem__removeButtonContainer">
          <span
            className="filterItem__removeButton"
            onClick={this.onRemoveSelectedFilter}
          />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="filterItemContainer">
        {this.renderFilterItem()}
        {this.renderForm()}
      </div>
    );
  }
}

FilterItem.propTypes = {
  filter: PropTypes.instanceOf(Filter).isRequired,
  onRemoveSelectedFilter: PropTypes.func.isRequired,
  onReplaceFilter: PropTypes.func.isRequired,
};
