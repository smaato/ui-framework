
import React, {
  PropTypes,
} from 'react';

const AccountPicture = props => {
  const picture = props.url ? <img src={props.url} /> : null;

  return (
    <span className="icon glyphicons-user accountPicture">
      {picture}
    </span>
  );
};

AccountPicture.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
};

export default AccountPicture;
