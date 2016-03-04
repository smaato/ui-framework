
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

import Icon from '../icon/Icon.jsx';

const IconLink = props => {
  const classes = classNames('glyphicons-link', props.classes);

  const extendedProps = Object.assign({}, props, {
    classes,
  });

  return (
    <Icon {...extendedProps} />
  );
};

IconLink.propTypes = Object.assign(Icon.propTypes, {
  classes: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object,
  ]),
});

export default IconLink;
