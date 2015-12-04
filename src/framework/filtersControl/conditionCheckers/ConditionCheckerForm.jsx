
import React, {
  Component,
  PropTypes,
} from 'react';

import FilterOption from '../../services/FilterOption';
import ConditionChecker from '../../services/ConditionChecker';

export default class ConditionCheckerForm extends Component {

  constructor(props) {
    super(props);
  }

  onClickAddButton() {
    const doesValuePass = this.refs.doesValuePass.value;
    if (!doesValuePass.trim()) {
      return;
    }

    const conditionChecker =
      new ConditionChecker(this.props.filterOption, this.props.comparisonType, doesValuePass);

    this.props.onAddConditionChecker(conditionChecker);
  }

  onKeyUp(event) {
    if (event.key !== 'Enter') return;
    this.onClickAddButton();
  }

  render() {
    setTimeout(() => this.refs.doesValuePass.focus());

    return (
      <div className="conditionCheckerForm">
        <div className="conditionCheckerForm__filterName">
          {`${this.props.filterOption.name} (${this.props.comparisonType})`}
        </div>
        <div className="conditionCheckerForm__filterValueWrapper">
          <input
            ref="doesValuePass"
            type="text"
            className="conditionCheckerForm__doesValuePass"
            onKeyUp={this.onKeyUp.bind(this)}
          />
        </div>
        <div className="conditionCheckerForm__buttons">
          <button onClick={this.props.onCancelConditionChecker}>
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

ConditionCheckerForm.propTypes = {
  filterOption: PropTypes.instanceOf(FilterOption),
  comparisonType: PropTypes.string.isRequired,
  onAddConditionChecker: PropTypes.func.isRequired,
  onCancelConditionChecker: PropTypes.func.isRequired,
};
