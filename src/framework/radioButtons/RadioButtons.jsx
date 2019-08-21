
import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';

import { Text } from '../framework';

export default class RadioButtons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: this.props.selectedElement,
    };

    this.onSelectOption = this.onSelectOption.bind(this);
  }

  onSelectOption(element) {
    this.setState({
      selectedOption: element,
    });
    this.props.onSelect(element.value);
  }

  render() {
    const onSelectCreator = value => () => this.onSelectOption(value);

    const radioElements = this.props.elements.map((element, index) => {
      const checked = element === this.state.selectedOption;

      return (
        <div className="radioButtons--element" key={index}>
          <input
            className="radioButtons--inputRadio"
            type="radio"
            name={this.props.name}
            onChange={onSelectCreator(element)}
            checked={checked}
          />
          <div className="radioButtons--label">
            <Text>{element.label}</Text>
          </div>
        </div>
      );
    });

    return (
      <div className={`radioButtons ${this.props.className}`}>
        {radioElements}
      </div>
    );
  }
}

RadioButtons.propTypes = {
  className: PropTypes.string,
  elements: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.any,
  })).isRequired,
  onSelect: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  selectedElement: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.any,
  }),
};
