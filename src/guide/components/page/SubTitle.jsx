
import React, {
  PropTypes,
} from 'react';

const SubTitle = props => (
  <div className="examplePageSubTitle">
    {props.children}
  </div>
);

SubTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default SubTitle;
