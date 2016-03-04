
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

import Button from './Button.jsx';

const PrimaryButton = props => {
  const classes = classNames('button--primary', props.classes);

  const extendedProps = Object.assign({}, props, {
    classes,
  });

  return (
    <Button {...extendedProps} />
  );
};

PrimaryButton.propTypes = Object.assign(Button.propTypes, {
  classes: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object,
  ]),
});

export default PrimaryButton;
