
import React, {
  Component,
  PropTypes,
} from 'react';

import Filter from '../../services/Filter';
import FilterMatcher from '../../services/FilterMatcher';

export default class FilterMatcherForm extends Component {

  constructor(props) {
    super(props);
  }

  onClickAddButton() {
    const filterValue = this.refs.filterValue.value;
    if (!filterValue.trim()) {
      return;
    }

    const filterMatcher =
      new FilterMatcher(this.props.filter, this.props.method, filterValue);

    this.props.onAddFilterMatcher(filterMatcher);
  }

  onKeyUp(event) {
    if (event.key !== 'Enter') return;
    this.onClickAddButton();
  }

  render() {
    setTimeout(() => this.refs.filterValue.focus());

    return (
      <div className="filterMatcherForm">
        <div className="filterMatcherForm__filterName">
          {`${this.props.filter.name} (${this.props.method})`}
        </div>
        <div className="filterMatcherForm__filterValueWrapper">
          <input
            ref="filterValue"
            type="text"
            className="filterMatcherForm__filterValue"
            onKeyUp={this.onKeyUp.bind(this)}
          />
        </div>
        <div className="filterMatcherForm__buttons">
          <button onClick={this.props.onCancelFilterMatcher}>
            &lt; Back
          </button>
          <button onClick={this.onClickAddButton.bind(this)}>
            + Add
          </button>
        </div>
      </div>
    );
  }
}

FilterMatcherForm.propTypes = {
  filter: PropTypes.instanceOf(Filter),
  method: PropTypes.string.isRequired,
  onAddFilterMatcher: PropTypes.func.isRequired,
  onCancelFilterMatcher: PropTypes.func.isRequired,
};
