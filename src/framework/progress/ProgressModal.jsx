
import keyMirror from 'keymirror';
import PropTypes from 'prop-types';
import React from 'react';

import Progress from './Progress.jsx';
import ProgressSuccess from './ProgressSuccess.jsx';

const ProgressModal = (props) => {
  let content;

  switch (props.type) {
    case ProgressModal.TYPE.PROGRESS:
      content = <Progress />;
      break;

    case ProgressModal.TYPE.SUCCESS:
      content = <ProgressSuccess />;
      break;

    default:
      break;
  }

  return (
    <div data-testid="ProgressModal" className="progressModal">
      {content}
    </div>
  );
};

ProgressModal.TYPE = keyMirror({
  PROGRESS: null,
  SUCCESS: null,
});

ProgressModal.propTypes = {
  type: PropTypes.string,
};

export default ProgressModal;
