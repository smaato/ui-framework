
import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';

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
        <div key={index}>
          <input
            type="radio"
            name={this.props.name}
            onChange={onSelectCreator(element)}
            checked={checked}
          />
          {element.label}
        </div>
      );
    });

    return (
      <div className={this.props.className}>
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
