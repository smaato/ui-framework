
import React, {
  Component,
  PropTypes,
} from 'react';

export {
  default as AccountNav,
} from './AccountNav.jsx';

export {
  default as AccountPicture,
} from './AccountPicture.jsx';

export {
  default as AppLogo,
} from './AppLogo.jsx';

export {
  default as AppNav,
} from './AppNav.jsx';

export default class AppHeader extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="appHeader">
        <div className="appHeader__liner">
          {this.props.logo}
          {this.props.nav}
          {this.props.account}
        </div>
      </div>
    );
  }

}

AppHeader.propTypes = {
  logo: PropTypes.any,
  nav: PropTypes.any,
  account: PropTypes.any,
};

export default AppHeader;
