
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
};
