
import PropTypes from 'prop-types';
import React from 'react';

const AppTitle = props => (
  <div
    className="appTitle"
  >
    {props.text}
  </div>
);

AppTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default AppTitle;
