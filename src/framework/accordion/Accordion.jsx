
import React, {
  Component,
  PropTypes,
} from 'react';

import AccordionItem from './../accordionItem/AccordionItem.jsx';

export default class Accordion extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeId: this.props.activeId,
    };

    this.onTitleClick = this.onTitleClick.bind(this);
  }

  onTitleClick(currentId) {
    if (currentId !== this.state.activeId) {
      this.setState({
        activeId: currentId,
      });
    }
  }

  render() {
    const wrapperStyle = {
      width: this.props.width,
    };

    return (
      <div className="accordion" style={wrapperStyle}>
        {this.props.children.map((child, index) => (
          <AccordionItem
            index={index}
            isActive={this.state.activeId === index}
            key={index}
            maxHeight={this.props.maxHeight}
            onTitleClick={this.onTitleClick}
            title={child.props.title}
          >
            {child.props.children}
          </AccordionItem>
        ))}
      </div>
    );
  }
}

Accordion.defaultProps = {
  width: '210px',
};

Accordion.propTypes = {
  activeId: PropTypes.number,
  children: PropTypes.array,
  maxHeight: PropTypes.string,
  width: PropTypes.string,
};

