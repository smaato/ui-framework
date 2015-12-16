
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

export {
  default as DescriptionText,
} from './DescriptionText.jsx';

const Text = props => {
  const spacingClassMap = {
    [Text.SPACING.XSMALL]: 'text--smallSpacing',
  };

  const classes = classNames('text', spacingClassMap[props.spacing]);

  return (
    <div className={classes}>
      {props.children}
    </div>
  );
};

Text.SPACING = {
  XSMALL: 'XSMALL',
};

Text.propTypes = {
  children: PropTypes.string,
  spacing: PropTypes.string,
};

export default Text;
