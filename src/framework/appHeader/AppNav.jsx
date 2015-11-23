
import React, {
  Component,
  PropTypes,
} from 'react';
import classNames from 'classnames';

export default class AppNav extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const links = this.props.links.map((link, index) => {
      const className = classNames('appNav__link', {
        'selected': link.isSelected,
      });
      return (
        <li className={className} key={index}>
          <a href={link.href}>
            {link.text}
          </a>
        </li>
      );
    });

    return (
      <ul className="appNav">
        {links}
      </ul>
    );
  }

}

AppNav.propTypes = {
  links: PropTypes.array.isRequired,
};

export default AppNav;
