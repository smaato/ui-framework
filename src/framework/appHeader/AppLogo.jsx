
import React, {
  PropTypes,
} from 'react';

const AppLogo = props => {
  return (
    <a
      className="appLogo"
      title={props.text}
      href={props.href}>
      {props.text}
    </a>
  );
};

AppLogo.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string.isRequired,
};

AppLogo.defaultProps = {
  href: '#',
};

export default AppLogo;
