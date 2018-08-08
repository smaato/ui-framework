
import React from 'react';
import PropTypes from 'prop-types';

const SubTitle = props => (
  <div className="examplePageSubTitle">
    {props.children}
  </div>
);

SubTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default SubTitle;
