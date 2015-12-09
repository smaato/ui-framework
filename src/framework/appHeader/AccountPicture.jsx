
import React, {
  PropTypes,
} from 'react';

const AccountPicture = props => {
  const picture = props.url ?
    <img src={props.url} /> :
    <span className="icon glyphicons-user accountPicture__icon"/>;

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
