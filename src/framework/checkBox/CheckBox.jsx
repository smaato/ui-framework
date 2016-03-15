
import React, {
  Component,
  PropTypes,
} from 'react';

export default class CheckBox extends Component {

  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onClick(event) {
    // Stop the event from bubbling up. This is useful in situations where
    // the checkbox is inside of a grid row and the row has an onClick handler.
    // By stopping the event from bubbling up, we prevent the row's onClick
    // handler from being called when the checkbox is clicked.
    //
    // We can't put it inside of the onChange handler, because React's event
    // system calls that handler *after* the click event has bubbled up.
    event.stopPropagation();
  }

  onChange(event) {
    if (this.props.onClick) {
      this.props.onClick(event.target.checked, this.props.id, this.props.data);
    }
  }

  render() {
    return (
      <span
        className="checkboxWrapper"
        onClick={this.onClick}
      >
        <input
          type="checkbox"
          name={this.props.id}
          id={this.props.id}
          className="checkbox__input"
          onChange={this.onChange}
          checked={this.props.checked}
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
  data: PropTypes.any,
};
