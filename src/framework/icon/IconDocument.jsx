
import React from 'react';
import classNames from 'classnames';

import Icon from '../icon/Icon.jsx';

const IconDocument = props => {
  const classes = classNames('icon--document', props.classes);

  const extendedProps = Object.assign({}, props, {
    classes,
  });

  return (
    <Icon {...extendedProps} />
  );
};

IconDocument.propTypes = Icon.propTypes;

export default IconDocument;
