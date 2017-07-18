
import React, {
  Component,
  PropTypes,
} from 'react';

import {
  Box,
  Text,
} from '../../framework/framework';

export default class Tooltip extends Component {
  constructor(props) {
    super(props);

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.state = { hover: false };
  }

  componentDidUpdate() {
    if (this.state && this.state.hover) {
      this.tooltipContainer.style.display = 'inline-block';
      this.tooltipContainer.style.left = '0px';
      this.tooltipContainer.style.top = '0px';
      this.tooltipContainer.style.height = this.props.height;
      this.tooltipContainer.style.width = this.props.width;
      this.tooltipContainer.style.opacity = 0;
      this.styles = 'tooltipContainer';

      this.windowLimits = {
        height: window.innerHeight,
        width: window.innerWidth,
      };

      const tooltipDimension = this.getTooltipDimension();
      let tooltipX = (
          this.tooltipWrapper.clientWidth / 2
        ) - (tooltipDimension.width - 15);
      if (tooltipDimension.posX - tooltipDimension.width < 0) {
        tooltipX = 0;
        this.styles += ' tooltipLeft';
      }

      let tooltipY = this.tooltipWrapper.clientHeight;
      if (
        this.windowLimits.height < tooltipDimension.height +
        tooltipDimension.posY + 20
      ) {
        tooltipY = -tooltipDimension.height;
        this.styles += ' tooltipTop';
      }

      this.tooltipContainer.className = this.styles;
      this.tooltipContainer.style.left = `${tooltipX}px`;
      this.tooltipContainer.style.top = `${tooltipY}px`;
      this.tooltipContainer.style.opacity = 1;
    }
  }

  onMouseEnter() {
    this.setState({ hover: true });
  }

  onMouseLeave() {
    this.setState({ hover: false });
  }

  getTooltipDimension() {
    let lx;
    let ly;
    let element = this.tooltip;
    for (lx = 0, ly = 0;
      element != null;
      lx += element.offsetLeft,
      ly += element.offsetTop,
      element = element.offsetParent);

    return {
      height: this.tooltip.clientHeight,
      posX: lx,
      posY: ly,
      width: this.tooltip.clientWidth,
    };
  }

  renderTooltipLabel() {
    return (
      <div
        className="tooltipContainer "
        ref={(div) => { this.tooltipContainer = div; }}
      >
        <Box roundedCorners>
          <div
            className="tooltip"
            ref={(div) => { this.tooltip = div; }}
          >
            <Text>
              {this.props.message}
            </Text>
          </div>
        </Box>
      </div>
    );
  }

  render() {
    let tooltipContainter;

    if (this.state && this.state.hover) {
      tooltipContainter = this.renderTooltipLabel();
    } else {
      tooltipContainter = '';
    }

    return (
      <div
        className="tooltipWrapper"
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        ref={(div) => { this.tooltipWrapper = div; }}
      >
        {this.props.children}
        {tooltipContainter}
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
