
import React from 'react';
import classNames from 'classnames';

import Icon from '../icon/Icon.jsx';

const IconPaperclip = props => {
  const classes = classNames('glyphicons-paperclip', props.classes);

  const extendedProps = Object.assign({}, props, {
    classes,
  });

  return (
    <Icon {...extendedProps} />
  );
};

IconPaperclip.propTypes = Object.assign({}, Icon.propTypes);

export default IconPaperclip;
