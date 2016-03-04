
import React, {
  PropTypes,
} from 'react';

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

Body.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
  ]),
};

export default Body;
