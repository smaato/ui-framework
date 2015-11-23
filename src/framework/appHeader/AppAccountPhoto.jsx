
import React, {
  Component,
  PropTypes,
} from 'react';

export default class AppAccountPhoto extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span className="icon glyphicons-user"></span>
    );
  }

}

AppAccountPhoto.propTypes = {
  url: PropTypes.string,
};

export default AppAccountPhoto;
