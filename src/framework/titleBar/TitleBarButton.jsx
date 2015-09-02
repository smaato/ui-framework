
import React, {
  Component,
  PropTypes
} from 'react';

export default class TitleBarButton extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <a
          className='titleBar__button button button--primary'
          href='#'
        >
          <span className='icon glyphicons-plus'>
          </span>
          {this.props.label}
        </a>
    );
  }

}

TitleBarButton.propTypes = {
  label: PropTypes.string
};
