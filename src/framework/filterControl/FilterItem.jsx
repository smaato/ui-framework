
import React, {
  Component,
  PropTypes,
} from 'react';

import {
  Filter,
} from '../services';

import FilterForm from './forms/FilterForm.jsx';

export default class FilterItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isFormOpen: false,
    };

    this.onCancelEditing = this.onCancelEditing.bind(this);
    this.onClickAnywhere = this.onClickAnywhere.bind(this);
    this.onEditFilter = this.onEditFilter.bind(this);
    this.onRemoveSelectedFilter = this.onRemoveSelectedFilter.bind(this);
    this.onUpdateFilter = this.onUpdateFilter.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.onClickAnywhere);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onClickAnywhere);
  }

  onCancelEditing() {
    this.setState({
      isFormOpen: false,
    });
  }

  onClickAnywhere(event) {
    if (
      this.state.isFormOpen &&
      !this.filterFormDropdown.contains(event.target) &&
      !this.filterItemDiv.contains(event.target)
    ) {
      this.setState({
        isFormOpen: false,
      });
    }
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
      <div
        className="filterFormDropdown filterFormDropdown--editing"
        ref={(div) => { this.filterFormDropdown = div; }}
      >
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
    let closeButton;
    if (this.props.filter.filterOption.isRemovable) {
      closeButton = (
        <div className="filterItem__removeButtonContainer">
          <span
            className="filterItem__removeButton"
            onClick={this.onRemoveSelectedFilter}
          />
        </div>
      );
    }

    return (
      <div
        className="filterItem button"
        ref={(div) => { this.filterItemDiv = div; }}
      >
        <span
          className="filterItem__label"
          onClick={this.onEditFilter}
          title={title}
        >
          <strong className="filterItem__name">
            {filterName}:
          </strong>
          {' '}
          {this.props.filter.humanizeComparisonValue()}
        </span>
        {closeButton}
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
  onRemoveSelectedFilter: PropTypes.func,
  onReplaceFilter: PropTypes.func.isRequired,
};
