
import React, {
  PropTypes,
} from 'react';

const BodyPanel = props => (
  <div className="bodyPanel">
    {props.children}
  </div>
);

BodyPanel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string,
  ]),
};

export default BodyPanel;
