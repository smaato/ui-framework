
import React, {
  PropTypes,
} from 'react';

export {
  default as TitleBarButton,
} from './TitleBarButton.jsx';

const TitleBar = (props) => {
  let buttons;
  if (props.buttons) {
    buttons = props.buttons.map((button) => {
      return button;
    });
  }
  return (
    <div className="titleBar">
      <label className="titleBar__title">
        {props.label}
      </label>
      <div className="titleBar__buttonContainer">
        {buttons}
      </div>
    </div>
  );
};

TitleBar.propTypes = {
  label: PropTypes.string,
  buttons: PropTypes.array,
};

export default TitleBar;
