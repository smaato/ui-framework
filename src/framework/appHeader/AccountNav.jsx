
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

import AccountPicture from './AccountPicture.jsx';

const AccountNav  = props => {
  const dropdownClass = classNames('appHeaderDropdownArrow', {
    'is-app-header-dropdown-arrow-open': props.isOpen,
  });

  return (
    <a
      className="accountNav"
      onClick={props.onClick}
    >
      <AccountPicture
        url={props.pictureUrl}
        title={props.email}
      />
      <span className="accountNav__email">
        {props.email}
      </span>
      <span className={dropdownClass} />
    </a>
  );
};

AccountNav.propTypes = {
  email: PropTypes.string.isRequired,
  pictureUrl: AccountPicture.propTypes.url,
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
};

AccountNav.defaultProps = {
  isOpen: false,
};

export default AccountNav;
