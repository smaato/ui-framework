
import React, {
  Component,
  PropTypes,
} from 'react';

export default class AppLogo extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a
        className="appLogo"
        title={this.props.text}
        href={this.props.href || '#'}>
        {this.props.text}
      </a>
    );
  }

}

AppLogo.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default AppLogo;
