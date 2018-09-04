
import PropTypes from 'prop-types';
import React from 'react';

const SubTitle = props => (
  <div className="examplePageSubTitle">
    {props.children}
  </div>
);

SubTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default SubTitle;
