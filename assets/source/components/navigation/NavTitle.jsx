
import PropTypes from 'prop-types';
import React from 'react';

const NavTitle = props => (
  <div
    className="examplesNavMenuTitle"
  >
    {props.children}
  </div>
);

NavTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default NavTitle;
