
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

import Button from './Button.jsx';

const HollowButton = props => {
  const classes = classNames('button--hollow', props.classes);

  const extendedProps = Object.assign({}, props, {
    classes,
  });

  return (
    <Button {...extendedProps} />
  );
};

HollowButton.propTypes = Object.assign(Button.propTypes, {
  classes: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object,
  ]),
});

export default HollowButton;
