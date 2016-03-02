
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

import AccountPicture from './AccountPicture.jsx';

const AccountNav = props => {
  let dropdownArrow;
  if (!props.disableDropdown) {
    const dropdownClass = classNames('appHeaderDropdownArrow', {
      'is-app-header-dropdown-arrow-open': props.isOpen,
    });

    dropdownArrow = <span className={dropdownClass} />;
  }

  return (
    <div className="accountNav">
      <a
        className="accountNav__user"
        onClick={props.onClick}
      >
        <AccountPicture
          url={props.pictureUrl}
          title={props.email}
        />
        <span className="accountNav__email">
          {props.email}
        </span>
        {dropdownArrow}
      </a>
      {props.right}
    </div>
  );
};

AccountNav.propTypes = {
  email: PropTypes.string.isRequired,
  pictureUrl: AccountPicture.propTypes.url,
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
  disableDropdown: PropTypes.bool,
  right: PropTypes.element,
};

AccountNav.defaultProps = {
  isOpen: false,
  disableDropdown: false,
};

export default AccountNav;
