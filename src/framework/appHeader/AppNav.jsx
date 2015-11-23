
import React, {
  Component,
  PropTypes,
} from 'react';

export default class AppNav extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const anchorsArray = this.props.anchorsArray.map((link, index) => (
      <li className="appNav__link" key={index}>
        {link}
      </li>
    ));

    return (
      <ul className="appNav">
        {anchorsArray}
      </ul>
    );
  }

}

AppNav.propTypes = {
  anchorsArray: PropTypes.arrayOf(React.PropTypes.element).isRequired,
};

export default AppNav;
