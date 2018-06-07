
import React, {
  Component,
  PropTypes,
} from 'react';

import AccordionItem from './../accordionItem/AccordionItem.jsx';

export default class Accordion extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeID: !isNaN(this.props.activeID) ? this.props.activeID : null,
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

  render() {
    const wrapperStyle = {
      width: this.props.width,
    };

    return (
      <div className="accordion" style={wrapperStyle}>
        {this.props.children.map((child, index) => (
          <AccordionItem
            index={index}
            isActive={this.state.activeID === index}
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
  activeID: PropTypes.number,
  children: PropTypes.array,
  maxHeight: PropTypes.string,
  width: PropTypes.string,
};

