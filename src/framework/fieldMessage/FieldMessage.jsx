
import React, {
  Component,
  PropTypes,
} from 'react';
import classNames from 'classnames';

class FieldMessage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isErrorDisplayed: true,
    };
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
    if (Object.keys(this.refs).length === 0) return;
    this.refs.balloon.style.width = '';
    const fieldEl = this.refs.componentRoot.children[0];
    this.refs.balloon.style.width = `${fieldEl.offsetWidth}px`;
  }

  render() {
    const classes = classNames('fieldMessage', this.props.className);

    const extendedProps = Object.assign({}, this.props, {
      className: classes,
    });

    let output;

    if (this.props.isDisplayed) {
      output = (
        <div ref="componentRoot" {...extendedProps}>
          {this.props.children}

          <div
            ref="balloon"
            className="fieldMessageBalloon"
          >
            {this.props.message}
          </div>
        </div>
      );
    } else {
      output = this.props.children;
    }

    return (
      <div>
        {output}
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
