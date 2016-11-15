
import React, {
  PropTypes,
} from 'react';

const BodyMaxWidthLayout = props => (
  <div className="bodyMaxWidthLayout">
    {props.children}
  </div>
);

BodyMaxWidthLayout.propTypes = {
  children: PropTypes.any,
};

export default BodyMaxWidthLayout;
