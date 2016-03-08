
import React, {
  PropTypes,
} from 'react';

const TitleBar = (props) => {
  let buttons;

  if (props.buttons) {
    buttons = props.buttons.map((button, index) => (
      <div className="titleBar__button" key={index}>
        {button}
      </div>
    ));
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
