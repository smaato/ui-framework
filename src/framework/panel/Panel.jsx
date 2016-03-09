
import React, {
  PropTypes,
} from 'react';

export {
  default as PanelLayout,
} from './PanelLayout.jsx';

const Panel = props => (
  <div className="panel">
    <div className="panel__title">
      <div className="panel__titleLabel">
        {props.title}
      </div>
      <div className="panel__actions">
        {props.actions}
      </div>
    </div>

    <div className="panel__content">
      {props.children}
    </div>
  </div>
);

Panel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
  actions: PropTypes.any,
};

export default Panel;
