
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

import Button from './Button.jsx';

const CallOutButton = props => {
  const classes = classNames('button--callOut', props.classes);

  const extendedProps = Object.assign({}, props, {
    classes,
  });

  return (
    <Button {...extendedProps} />
  );
};

CallOutButton.propTypes = Object.assign(Button.propTypes, {
  classes: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object,
  ]),
});

export default CallOutButton;
