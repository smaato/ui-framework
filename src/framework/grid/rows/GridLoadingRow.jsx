
// Import exports from various modules.
import React from 'react';

import Spinner from '../../spinner/Spinner.jsx';

// Define stateless functional component.
const GridLoadingRow = () => {
  return (
    <div className="gridLoadingRow">
      <Spinner />&nbsp;
      <span>Loading...</span>
    </div>
  );
};

export default GridLoadingRow;
