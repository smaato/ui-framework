
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

import Button from '../../button/Button.jsx';

const AppHeaderButton = props => {
  const classes = classNames('appHeaderButton', props.classes);

  const extendedProps = Object.assign({}, props, {
    classes,
  });

  return (
    <Button {...extendedProps} />
  );
};

AppHeaderButton.propTypes = Object.assign({}, Button.propTypes, {
  classes: PropTypes.string,
});

export default AppHeaderButton;
