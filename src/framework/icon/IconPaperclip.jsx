
import React, {
  PropTypes,
} from 'react';
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

IconPaperclip.propTypes = Object.assign(Icon.propTypes, {
  classes: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object,
  ]),
});

export default IconPaperclip;
