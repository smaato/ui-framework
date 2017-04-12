
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';
import keyMirror from 'keymirror';

export {
  default as DescriptionText,
} from './DescriptionText.jsx';

export {
  default as Heading,
} from './Heading.jsx';

const Text = (props) => {
  const rhythmClassMap = {
    [Text.RHYTHM.XSMALL]: 'text--xSmallRhythm',
    [Text.RHYTHM.SMALL]: 'text--smallRhythm',
  };

  const classes = classNames('text', rhythmClassMap[props.rhythm]);

  return (
    <div className={classes}>
      {props.children}
    </div>
  );
};

Text.RHYTHM = keyMirror({
  XSMALL: null,
  SMALL: null,
});

Text.propTypes = {
  children: PropTypes.any,
  rhythm: PropTypes.string,
};

export default Text;
