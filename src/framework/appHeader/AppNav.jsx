
import React, {
  PropTypes,
} from 'react';

const AppNav = props => {
  const anchors = props.anchors.map((link, index) => (
    <div className="appNav__link" key={index}>
      {link}
    </div>
  ));

  return (
    <nav className="appNav">
      {anchors}
    </nav>
  );
};

AppNav.propTypes = {
  anchors: PropTypes.arrayOf(React.PropTypes.element).isRequired,
};

export default AppNav;
