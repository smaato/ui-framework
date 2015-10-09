
import React, {
  Component,
  PropTypes,
} from 'react';
import classNames from 'classnames';

export default class CheckBox extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const classWrapper = classNames('checkboxWrapper', this.props.classWrapper);
    const classInput = classNames('checkbox__input', this.props.classInput);
    const classLabel = classNames('checkbox__faux__input', this.props.classLabel);

    return (
      <span className={classWrapper}>
        <input
          type="checkbox"
          name={this.props.id}
          id={this.props.id}
          className={classInput}
        />
        <label
          htmlFor={this.props.id}
          className={classLabel}
        />
      </span>
    );
  }

}

CheckBox.propTypes = {
  classWrapper: PropTypes.string,
  classInput: PropTypes.string,
  classLabel: PropTypes.string,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};
