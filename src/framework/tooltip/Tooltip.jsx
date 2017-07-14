
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

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  componentDidMount() {
    this.tooltipContainer = this.refs.tooltipContainer;
  }

  onMouseEnter() {
    this.renderTooltip();
  }

  onMouseLeave() {
    this.tooltipContainer.style.display = 'none';
    this.tooltipContainer.style.opacity = 1;
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
            {this.props.message}
          </Text>
        </div>
      </Box>
    );
  }

  renderTooltip() {
    this.tooltipContainer.style.display = 'inline-block';
    this.tooltipContainer.style.left = '0px';
    this.tooltipContainer.style.top = '0px';
    this.tooltipContainer.style.height = this.props.height;
    this.tooltipContainer.style.width = this.props.width;
    let styles = 'tooltipContainer';

    const windowLimits = {
      height: window.innerHeight,
      width: window.innerWidth,
    };

    ReactDOM.render(
      this.renderTooltipLabel(),
      this.tooltipContainer
    );

    const tooltipDimension = this.getTooltipDimension();
    let tooltipX = (document.getElementById('tooltipWrapper').clientWidth / 2) -
      (tooltipDimension.width - 15);
    if (tooltipDimension.posX - tooltipDimension.width < 0) {
      tooltipX = 0;
      styles += ' tooltipLeft';
    }

    let tooltipY = document.getElementById('tooltipWrapper').clientHeight;
    if (
      windowLimits.height < tooltipDimension.height +
      tooltipDimension.posY + 20
    ) {
      tooltipY = -tooltipDimension.height;
      styles += ' tooltipTop';
    }

    document.getElementById('tooltipContainer').className = styles;
    this.tooltipContainer.style.left = `${tooltipX}px`;
    this.tooltipContainer.style.top = `${tooltipY}px`;
    this.tooltipContainer.style.opacity = 1;
  }

  render() {
    return (
      <div
        className="tooltipWrapper"
        id="tooltipWrapper"
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        {this.props.children}
        <div
          id="tooltipContainer"
          className="tooltipContainer "
          ref="tooltipContainer"
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
