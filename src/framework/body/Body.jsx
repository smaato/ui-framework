
import React from 'react';

export {
  default as BodyPanel,
} from './BodyPanel.jsx';

export {
  default as BodyPanelItem,
} from './BodyPanelItem.jsx';

const Body = props => (
  <div className="body">
    {props.children}
  </div>
);

export default Body;
