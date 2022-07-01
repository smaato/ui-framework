
import PropTypes from 'prop-types';
import React from 'react';

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
    <div data-testid="TitleBar" className="titleBar">
      <span className="titleBar__title">
        {props.label}
      </span>
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
