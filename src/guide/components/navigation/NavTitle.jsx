
import React from 'react';
import PropTypes from 'prop-types';

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
