
import React, {
  Component,
  PropTypes,
} from 'react';

export default class AccountPicture extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const picture = this.props.url ? <img src={this.props.url} /> : null;

    return (
      <span className="icon glyphicons-user accountPicture">
        {picture}
      </span>
    );
  }

}

AccountPicture.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
};

export default AccountPicture;
