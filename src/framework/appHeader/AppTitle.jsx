
import React, {
  PropTypes,
} from 'react';

const AppTitle = props => {
  return (
    <div
      className="appTitle"
    >
      {props.text}
    </div>
  );
};

AppTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default AppTitle;
