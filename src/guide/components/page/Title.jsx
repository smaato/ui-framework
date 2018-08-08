
import React from 'react';
import PropTypes from 'prop-types';

const Title = props => (
  <div className="examplePageTitle">
    {props.children}
  </div>
);

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Title;
