
import PropTypes from 'prop-types';
import React from 'react';

import AppTitle from './AppTitle.jsx';

const AppTitleContainer = props => (
  <div data-testid="AppTitleContainer" className="appTitleContainer">
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
  children: PropTypes.any,
  onClick: PropTypes.func,
  title: AppTitle.propTypes.text,
};

export default AppTitleContainer;
