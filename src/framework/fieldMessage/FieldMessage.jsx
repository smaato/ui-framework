
import React, {
  Component,
  PropTypes,
} from 'react';
import classNames from 'classnames';

class FieldMessage extends Component {

  constructor(props) {
    super(props);
    this.setBalloonWidthBound = this.setBalloonWidth.bind(this);
  }

  componentDidMount() {
    this.setBalloonWidth();
    window.addEventListener('resize', this.setBalloonWidthBound);
  }

  componentDidUpdate() {
    this.setBalloonWidth();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setBalloonWidthBound);
  }

  setBalloonWidth() {
    if (!this.props.isDisplayed) return;
    this.refs.balloon.style.width = '';
    const fieldEl = this.refs.componentRoot.children[0];
    this.refs.balloon.style.width = `${fieldEl.offsetWidth}px`;
  }

  render() {
    const classes = classNames('fieldMessage', this.props.className);

    const extendedProps = Object.assign({}, this.props, {
      className: classes,
    });

    let balloon;

    if (this.props.isDisplayed) {
      balloon = (
        <div
          ref="balloon"
          className="fieldMessageBalloon"
        >
          {this.props.message}
        </div>
      );
    }

    return (
      <div ref="componentRoot" {...extendedProps}>
        {this.props.children}
        {balloon}
      </div>
    );
  }

}

FieldMessage.propTypes = {
  message: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  isDisplayed: PropTypes.bool,
  isFieldNotFullWidth: PropTypes.bool,
};

FieldMessage.defaultProps = {
  isDisplayed: false,
};

export default FieldMessage;
