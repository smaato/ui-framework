
import React from 'react';

const Progress = () => (
  <div className="progress">
    <div className="progress__dot" />
    <div className="progress__dot" />
    <div className="progress__dot" />
    <div className="progress__dot" />
  </div>
);

export default Progress;

// We need to export these components after the default export because they
// depend on it.
export {
  default as ProgressModal,
} from './ProgressModal.jsx';

export {
  default as ProgressSuccess,
} from './ProgressSuccess.jsx';
