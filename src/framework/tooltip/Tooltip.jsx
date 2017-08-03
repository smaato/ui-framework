
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
    if (this.state.hover) {
      this.content.style.width = this.props.width;
      const styles = ['tooltip__container'];

      let isPosXSet = false;
      let isPosYSet = false;

      const tooltipDimension = this.getTooltipDimension();
      let tooltipX =
        (this.tooltip.clientWidth / 2) - (tooltipDimension.width - 21);
      if (tooltipDimension.posX - tooltipDimension.width < 0) {
        tooltipX = (this.tooltip.clientWidth / 2) - 18;
        styles.push('tooltipRight');
        isPosXSet = true;
      }

      let tooltipY = this.tooltip.clientHeight + 15;
      if (
        window.innerHeight < tooltipDimension.height +
        tooltipDimension.posY + 20
      ) {
        tooltipY = -tooltipDimension.height - 19;
        styles.push('tooltipTop');
        isPosYSet = true;
      }

      this.container.style.left = `${tooltipX}px`;
      this.container.style.top = `${tooltipY}px`;

      // reajust tooltip taking into account if it is visible
      const containerBounds = this.container.getBoundingClientRect();
      const elementTooltip = document.elementFromPoint(
        containerBounds.left + 2,
        (containerBounds.top + containerBounds.height) - 2
      );
      let heightTooltip = containerBounds.top;

      // if it is not already positioned adove reposition it if needed
      if (!isPosYSet && !this.container.contains(elementTooltip)) {
        isPosYSet = true;
        heightTooltip -= (containerBounds.height + 1);
        tooltipY = -tooltipDimension.height - 19;
        this.container.style.top = `${tooltipY}px`;
        styles.push('tooltipTop');
      }

      // recalculate from actual position after reposition
      const elementTooltipX = document.elementFromPoint(
        containerBounds.left + 2,
        isPosYSet ?
          heightTooltip :
          (containerBounds.top + containerBounds.height) - 2
      );

      // update position to right if needed
      if (!isPosXSet && !this.container.contains(elementTooltipX)) {
        tooltipX = (this.tooltip.clientWidth / 2) - 18;
        this.container.style.left = `${tooltipX}px`;
        styles.push('tooltipRight');
      }

      this.container.className = styles.join(' ');
      this.container.style.opacity = 1;
    }
  }

  onMouseEnter() {
    this.setState({ hover: true });
  }

  onMouseLeave() {
    this.setState({ hover: false });
  }

  getTooltipDimension() {
    return {
      height: this.content.clientHeight,
      posX: this.container.getBoundingClientRect().left,
      posY: this.container.getBoundingClientRect().top,
      width: this.content.clientWidth,
    };
  }

  renderTooltip() {
    return (
      <div
        className="tooltip__container"
        ref={(div) => { this.container = div; }}
      >
        <Box roundedCorners>
          <div
            className="tooltip__container__content"
            ref={(div) => { this.content = div; }}
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

    if (this.state.hover) {
      tooltipContainter = this.renderTooltip();
    }

    return (
      <div
        className="tooltip"
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        ref={(div) => { this.tooltip = div; }}
      >
        {this.props.children}
        {tooltipContainter}
      </div>
    );
  }
}

Tooltip.propTypes = {
  children: PropTypes.any,
  message: PropTypes.string,
  width: PropTypes.string,
};
