import React, {
  PropTypes,
} from 'react';

const Heading = props => (
  <div className="heading">
    {props.children}
  </div>
);

Heading.propTypes = {
  children: PropTypes.any,
};

export default Heading;
