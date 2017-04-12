
import React, {
  PropTypes,
} from 'react';

const Title = props => (
  <div className="examplePageTitle">
    {props.children}
  </div>
);

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Title;
