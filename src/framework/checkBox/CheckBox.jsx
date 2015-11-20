
import React, {
  Component,
  PropTypes,
} from 'react';

export default class CheckBox extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span className="checkboxWrapper">
        <input
          type="checkbox"
          name={this.props.id}
          id={this.props.id}
          className="checkbox__input"
          onClick={this.props.onClick}
          checked={this.props.checked}
          // Since this is a controlled component
          // http://facebook.github.io/react/docs/forms.html#controlled-components
          // React throws console warning when readOnly is not set
          readOnly
        />
        <label
          htmlFor={this.props.id}
          className="checkbox__faux__input"
        />
      </span>
    );
  }

}

CheckBox.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  onClick: PropTypes.func,
  checked: PropTypes.bool,
};
