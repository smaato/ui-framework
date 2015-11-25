
import React, {
  PropTypes,
} from 'react';

const ViewHeaderNav = props => {
  const anchors = props.anchors.map((anchor, index) => (
    <div className="viewHeaderNav__link" key={index}>
      {anchor}
    </div>
  ));

  return (
    <nav className="viewHeaderNav">
      {anchors}
    </nav>
  );
};

ViewHeaderNav.propTypes = {
  anchors: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default ViewHeaderNav;
