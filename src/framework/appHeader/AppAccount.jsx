
import React, {
  Component,
  PropTypes,
} from 'react';

import AppAccountPhoto from './AppAccountPhoto.jsx';

export default class AppAccount extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  onClick() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const dropdownClass = !this.state.isOpen ?
      'dropdownArrow' :
      'dropdownArrow--reverse';

    return (
      <a
        className="mainNavBar__account"
        onClick={this.onClick.bind(this)}
      >
        <AppAccountPhoto />
        <span className="mainNavBar__account__user">
          {this.props.email}
        </span>
        <span className={dropdownClass}></span>
      </a>
    );
  }

}

AppAccount.propTypes = {
  email: PropTypes.string.isRequired,
};

export default AppAccount;
