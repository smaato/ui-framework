
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

export {
  default as DescriptionText,
} from './DescriptionText.jsx';

const Text = props => {
  const rhythmClassMap = {
    [Text.RHYTHM.XSMALL]: 'text--xSmallRhythm',
  };

  const classes = classNames('text', rhythmClassMap[props.rhythm]);

  return (
    <div className={classes}>
      {props.children}
    </div>
  );
};

Text.RHYTHM = {
  XSMALL: 'XSMALL',
};

Text.propTypes = {
  children: PropTypes.string,
  rhythm: PropTypes.string,
};

export default Text;
