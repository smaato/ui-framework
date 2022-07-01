
import PropTypes from 'prop-types';
import React, {
  Component,
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

      let isRenderedToRight = false;
      let isRenderedToTop = false;

      // Adjust position to the right if window requires.
      this.setPosX(this.getTooltipXToLeft());
      if (this.container.getBoundingClientRect().left < 0) {
        this.setPosX(this.getTooltipXToRight());
        isRenderedToRight = true;
      }

      // Adjust position to the top if window requires.
      this.setPosY(this.getTooltipYToBottom());
      if (window.innerHeight < this.container.getBoundingClientRect().bottom) {
        this.setPosY(this.getTooltipYToTop());
        isRenderedToTop = true;
      }

      // Reajust position to the top if container edge is not visible.
      if (
        !isRenderedToTop &&
        !this.container.contains(
          this.getElementFromContainerEdge(isRenderedToRight, true)
        )
      ) {
        this.setPosY(this.getTooltipYToTop());
        isRenderedToTop = true;
      }

      // Reajust position to the right if container edge is not visible.
      if (
        !isRenderedToRight &&
        !this.container.contains(
          this.getElementFromContainerEdge(true, isRenderedToTop)
        )
      ) {
        this.setPosX(this.getTooltipXToRight());
        isRenderedToRight = true;
      }

      if (isRenderedToRight) {
        styles.push('tooltipRight');
      }
      if (isRenderedToTop) {
        styles.push('tooltipTop');
      }

      this.container.className = styles.join(' ');
    }
  }

  onMouseEnter() {
    this.setState({ hover: true });
  }

  onMouseLeave() {
    this.setState({ hover: false });
  }

  getElementFromContainerEdge(isRenderedToRight, isRenderedToTop) {
    const containerBounding = this.container.getBoundingClientRect();
    const x = isRenderedToRight ?
      containerBounding.left + 1 :
      containerBounding.right - 1;
    const y = isRenderedToTop ?
      containerBounding.bottom - 1 :
      containerBounding.top + 1;

    return document.elementFromPoint(x, y);
  }

  getTooltipXToLeft() {
    return ((this.tooltip.clientWidth / 2) + 23) - this.container.clientWidth;
  }

  getTooltipXToRight() {
    return (this.tooltip.clientWidth / 2) - 18;
  }

  getTooltipYToBottom() {
    return this.tooltip.clientHeight + 15;
  }

  getTooltipYToTop() {
    return -this.container.clientHeight - 19;
  }

  setPosX(leftValue) {
    this.container.style.left = `${leftValue}px`;
  }

  setPosY(topValue) {
    this.container.style.top = `${topValue}px`;
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
        data-testid="Tooltip"
        className="tooltip"
        ref={(div) => { this.tooltip = div; }}
      >
        <span
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          {this.props.children}
        </span>

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
