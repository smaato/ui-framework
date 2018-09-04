
import PropTypes from 'prop-types';
import React, {
  Component,
} from 'react';

import {
  Filter,
  FilterOption,
} from '../../services';

import PrimaryButton from '../../button/PrimaryButton.jsx';

export default class InputFilterForm extends Component {

  constructor(props) {
    super(props);

    this.onClickAddButton = this.onClickAddButton.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  componentDidMount() {
    this.refs.enteredValue.focus();
  }

  onClickAddButton() {
    const enteredValue = this.refs.enteredValue.value;
    if (!enteredValue.trim()) {
      return;
    }

    const filter =
      new Filter(
        this.props.filterOption,
        enteredValue
      );

    this.props.onAddFilter(filter);
  }

  onKeyUp(event) {
    if (event.key !== 'Enter') return;
    this.onClickAddButton();
  }

  render() {
    return (
      <div className="inputFilterForm">
        <div className="inputFilterForm__filterValueWrapper">
          <input
            className="inputFilterForm__enteredValue"
            defaultValue={this.props.comparisonValue}
            onKeyUp={this.onKeyUp}
            ref="enteredValue"
            type="text"
          />
        </div>
        <div className="inputFilterForm__buttons">
          <div className="filterForm__buttons">
            <PrimaryButton
              onClick={this.onClickAddButton}
            >
              Update Results
            </PrimaryButton>
          </div>
        </div>
      </div>
    );
  }
}

InputFilterForm.propTypes = {
  comparisonValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  filterOption: PropTypes.instanceOf(FilterOption).isRequired,
  onAddFilter: PropTypes.func.isRequired,
};
