
import React, {
  Component,
  PropTypes,
} from 'react';
import classNames from 'classnames';

export default class AccordionItem extends Component {

  constructor(props) {
    super(props);

    this.onTitleClick = this.props.onTitleClick.bind(this);
  }

  classNameContent() {
    return classNames('accordion__item__content', {
      'accordion__item__content--active': this.props.isActive,
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
          onClick={() => (this.onTitleClick(this.props.index))}
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
  height: '250px',
};

AccordionItem.propTypes = {
  children: PropTypes.any,
  index: PropTypes.number,
  isActive: PropTypes.bool,
  maxHeight: PropTypes.string,
  onTitleClick: PropTypes.func,
  title: PropTypes.any,
};

