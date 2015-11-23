
import React, {
  Component,
  PropTypes,
} from 'react';

import AccountPicture from './AccountPicture.jsx';

export default class AccountNav extends Component {

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
        className="accountNav"
        onClick={this.onClick.bind(this)}
      >
        <AccountPicture
          url={this.props.pictureUrl}
          title={this.props.email}
        />
        <span className="accountNav__email">
          {this.props.email}
        </span>
        <span className={dropdownClass}></span>
      </a>
    );
  }

}

AccountNav.propTypes = {
  email: PropTypes.string.isRequired,
  pictureUrl: AccountPicture.propTypes.url,
};

export default AccountNav;
