import React, {
  Component,
  PropTypes,
} from 'react';

import ReactDOM from 'react-dom';

import {
  Box,
  Text,
} from '../../framework/framework';

export default class Tooltip extends Component {
  constructor(props) {
    super(props);

    this.content = this.props.message;
    this.children = this.props.children;
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  componentDidMount() {
    this.tooltip = this.refs.tooltipPosition;
  }

  onMouseEnter(item) {
    this.renderTooltip(item);
  }

  onMouseLeave() {
    this.tooltip.style.display = 'none';
    this.tooltip.style.opacity = 1;
  }

  getTooltipDimension() {
    const tooltip = document.getElementById('tooltip');

    let lx;
    let ly;
    let element = tooltip;
    for (lx = 0, ly = 0;
      element != null;
      lx += element.offsetLeft,
      ly += element.offsetTop,
      element = element.offsetParent);

    return {
      height: tooltip.clientHeight,
      posX: lx,
      posY: ly,
      width: tooltip.clientWidth,
    };
  }

  renderTooltipLabel() {
    return (
      <Box roundedCorners>
        <div id="tooltip" className="tooltip">
          <Text>
            {this.content}
          </Text>
        </div>
      </Box>
    );
  }

  renderTooltip(item) {
    this.tooltip.style.display = 'inline-block';
    this.tooltip.style.left = '0px';
    this.tooltip.style.top = '0px';
    this.tooltip.style.height = this.props.height;
    this.tooltip.style.width = this.props.width;
    let styles = 'tooltipPosition ';

    const windowLimits = {
      height: window.innerHeight,
      width: window.innerWidth,
    };

    ReactDOM.render(
      this.renderTooltipLabel(item),
      this.tooltip
    );

    const tooltipDimension = this.getTooltipDimension();
    let tooltipX = (document.getElementById('tooltipParent').clientWidth / 2) -
      (tooltipDimension.width - 15);
    if (tooltipDimension.posX - tooltipDimension.width < 0) {
      tooltipX = 0;
      styles += ' tooltipLeft';
    }

    let tooltipY = document.getElementById('tooltipParent').clientHeight;
    if (
      windowLimits.height < tooltipDimension.height +
      (tooltipDimension.posY + 20)
    ) {
      tooltipY = -tooltipDimension.height;
      styles += ' tooltipTop';
    }

    document.getElementById('tooltipPosition').className = styles;
    this.tooltip.style.left = `${tooltipX}px`;
    this.tooltip.style.top = `${tooltipY}px`;
    this.tooltip.style.opacity = 1;
  }

  render() {
    return (
      <div
        className="tooltipParent"
        ref="tooltipParent"
        id="tooltipParent"
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        {this.children}
        <div
          id="tooltipPosition"
          className="tooltipPosition "
          ref="tooltipPosition"
        />
      </div>
    );
  }
}

Tooltip.propTypes = {
  children: PropTypes.any,
  height: PropTypes.string,
  message: PropTypes.string,
  width: PropTypes.string,
};
