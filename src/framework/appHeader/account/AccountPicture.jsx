
import React, {
  PropTypes,
} from 'react';

const AccountPicture = props => {
  const picture = props.url ?
    <img
      src={props.url}
      title={props.title}
    /> :
    <span
      className="icon icon-user-white accountPicture__icon"
      title={props.title}
    />;

  return (
    <span className="accountPicture">
      {picture}
    </span>
  );
};

AccountPicture.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
};

export default AccountPicture;
