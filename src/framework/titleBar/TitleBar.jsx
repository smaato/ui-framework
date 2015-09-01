
import React, {
  Component,
  PropTypes
} from 'react';

export default class TitleBar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='titleBar'>
        <label className='titleBar__title'>
          {this.props.label}
        </label>
        <div className='titleBar__buttonContainer'>
          {this.props.buttons}
        </div>
      </div>
    );
  }

}

TitleBar.propTypes = {
  label: PropTypes.string,
  buttons: PropTypes.element
};
