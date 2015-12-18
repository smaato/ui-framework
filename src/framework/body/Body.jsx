
import React from 'react';

export {
  default as BodyPanel,
} from './BodyPanel.jsx';

const Body = props => {
  return (
    <div className="body">
      {props.children}
    </div>
  );
};

export default Body;
