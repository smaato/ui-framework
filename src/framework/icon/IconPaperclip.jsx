
import React from 'react';
import classNames from 'classnames';

import Icon from '../icon/Icon.jsx';

const IconPaperclip = props => {
  const classes = classNames('glyphicons-paperclip', props.className);

  const extendedProps = Object.assign({}, props, {
    className: classes,
  });

  return (
    <Icon {...extendedProps} />
  );
};

IconPaperclip.propTypes = Icon.propTypes;

export default IconPaperclip;
