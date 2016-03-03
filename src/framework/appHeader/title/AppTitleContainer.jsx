
import React, {
  PropTypes,
} from 'react';

import AppTitle from './AppTitle.jsx';

const AppTitleContainer = props => (
  <div className="appTitleContainer">
    <div
      className="appTitleContainer__title"
      onClick={props.onClick}
    >
      <AppTitle text={props.title} />
      <span className="appHeaderDropdownArrow" />
    </div>
    <div className="appTitleContainer__target">
      {props.children}
    </div>
  </div>
);

AppTitleContainer.propTypes = {
  onClick: PropTypes.func,
  title: AppTitle.propTypes.text,
};

export default AppTitleContainer;
