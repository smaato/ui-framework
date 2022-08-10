
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, {
  Component,
} from 'react';

export default class AccordionItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isActive: props.isActive,
    };

    this.onTitleClick = this.onTitleClick.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isActive !== this.props.isActive) {
      this.setState({
        isActive: this.props.isActive,
      });
    }
  }

  onTitleClick(event) {
    this.setState({
      isActive: !this.state.isActive,
    });

    if (this.props.onTitleClick) {
      this.props.onTitleClick(event);
    }
  }

  classNameContent() {
    return classNames('accordion__item__content', {
      'accordion__item__content--active': this.state.isActive,
    });
  }

  render() {
    const wrapperStyle = {
      maxHeight: this.props.maxHeight,
    };

    return (
      <div className="accordion__item" style={wrapperStyle}>
        <div
          className="accordion__item__title"
          onClick={this.onTitleClick}
        >
          {this.props.title}
        </div>

        <div className={this.classNameContent()}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

AccordionItem.defaultProps = {
  maxHeight: '250px',
};

AccordionItem.propTypes = {
  children: PropTypes.any,
  isActive: PropTypes.bool,
  maxHeight: PropTypes.string,
  onTitleClick: PropTypes.func,
  title: PropTypes.any,
};

