
import React, {
  Component,
  PropTypes,
} from 'react';

export default class TitleBar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let buttons;
    if (this.props.buttons) {
      buttons = this.props.buttons.map((button) => {
        return button;
      });
    }
    return (
      <div className="titleBar">
        <label className="titleBar__title">
          {this.props.label}
        </label>
        <div className="titleBar__buttonContainer">
          {buttons}
        </div>
      </div>
    );
  }

}

TitleBar.propTypes = {
  label: PropTypes.string,
  buttons: PropTypes.array,
};
