
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

export {
  default as SubLabel,
} from './SubLabel.jsx';

const Label = props => {
  const classes = classNames('label', props.className, {
    'label--clickable': props.htmlFor,
  });

  const extendedProps = Object.assign({}, props, {
    className: classes,
  });

  return (
    <label {...extendedProps} />
  );
};

Label.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string,
  ]),
  htmlFor: PropTypes.string,
};

export default Label;
