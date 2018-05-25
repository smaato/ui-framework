
import React, {
  Component,
  PropTypes,
} from 'react';
import classNames from 'classnames';

export default class Accordion extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeID: this.props.activeID ? this.props.activeID : 0,
    };

    this.onTitleClick = this.onTitleClick.bind(this);
  }

  onTitleClick(currentId) {
    if (currentId !== this.state.activeID) {
      this.setState({
        activeID: currentId,
      });
    }
  }

  classNameContent(index) {
    return classNames('accordion-item__content', {
      'accordion-item__content--active': index === this.state.activeID,
    });
  }

  render() {
    const wrapperStyle = {
      maxHeight: this.props.maxHeight ? this.props.maxHeight : '250px',
      width: this.props.width ? this.props.width : '210px',
    };

    return (
      <div className="accordion">
        {this.props.children.map((child, index) => (
          <div key={index} style={wrapperStyle} className="accordion-item">
            <div
              className="accordion-item__title"
              onClick={() => (this.onTitleClick(index))}
            >
              {child.title}
            </div>

            <div
              className={this.classNameContent(index)}
            >
              {child.content}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

Accordion.propTypes = {
  activeID: PropTypes.number,
  children: PropTypes.array,
  maxHeight: PropTypes.string,
  width: PropTypes.string,
};

