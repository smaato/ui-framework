
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

import Icon from '../icon/Icon.jsx';

const IconEllipsis = props => {
  const classes = classNames('glyphicons-more', props.classes);

  const extendedProps = Object.assign({}, props, {
    classes,
  });

  return (
    <Icon {...extendedProps} />
  );
};

IconEllipsis.propTypes = Object.assign(Icon.propTypes, {
  classes: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object,
  ]),
});

export default IconEllipsis;
