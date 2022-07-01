
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import AccountPicture from './AccountPicture.jsx';

const AccountNav = (props) => {
  const accountNavUserClasses = classNames('accountNav__user', {
    'accountNav__user--highlightOnHover': props.onClick,
  });

  let dropdownArrow;
  if (!props.disableDropdown) {
    const dropdownClass = classNames('appHeaderDropdownArrow', {
      'is-app-header-dropdown-arrow-open': props.isOpen,
    });

    dropdownArrow = <span className={dropdownClass} />;
  }

  return (
    <div data-testid="AccountNav" className="accountNav">
      <a
        className={accountNavUserClasses}
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
