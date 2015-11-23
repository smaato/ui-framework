
import React, {
  Component,
  PropTypes,
} from 'react';

export {
  default as AppAccount,
} from './AppAccount.jsx';

export {
  default as AppAccountPhoto,
} from './AppAccountPhoto.jsx';

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
      <div className="mainNavBar">
        <div className="mainNavBar__liner">
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
