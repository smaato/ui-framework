
import React from 'react';
import PropTypes from 'prop-types';

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
