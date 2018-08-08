
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export {
  default as SubLabel,
} from './SubLabel.jsx';

const Label = (props) => {
  const {
    children,
    htmlFor,
    isAlignedWithField,
    isAlignedWithLabeledField,
    ...reducedProps
  } = props;

  const classes = classNames('label', props.className, {
    'label--clickable': htmlFor,
    'label--alignedWthField': isAlignedWithField,
    'label--alignedWithLabeledField': isAlignedWithLabeledField,
  });

  const extendedProps = Object.assign({}, reducedProps, {
    className: classes,
  });

  return (
    <label htmlFor={htmlFor} {...extendedProps}>
      {children}
    </label>
  );
};

Label.propTypes = {
  children: PropTypes.any,
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string,
  ]),
  htmlFor: PropTypes.string,
  isAlignedWithField: PropTypes.bool,
  isAlignedWithLabeledField: PropTypes.bool,
};

export default Label;
