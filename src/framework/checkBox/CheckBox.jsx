
import classNames from 'classnames';
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
    if (!this.props.isReadonly && this.props.onClick) {
      this.props.onClick(event.target.checked, this.props.id, this.props.data);
    }
  }

  render() {
    const labelClasses = classNames('checkBox__label', {
      'checkBox__label--error': this.props.isError,
      'checkBox__label--readonly': this.props.isReadonly,
    });

    return (
      <span
        className="checkBox"
        onClick={this.onClick}
      >
        <input
          checked={this.props.checked}
          className="checkBox__input"
          disabled={this.props.isReadonly}
          id={this.props.id}
          name={this.props.id}
          onChange={this.onChange}
          type="checkbox"
        />
        <label
          htmlFor={this.props.id}
          className={labelClasses}
        >
          <span className="checkBox__icon icon icon-check-white" />
        </label>
      </span>
    );
  }

}

CheckBox.propTypes = {
  checked: PropTypes.bool,
  data: PropTypes.any,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  isError: PropTypes.bool,
  isReadonly: PropTypes.bool,
  onClick: PropTypes.func,
};
