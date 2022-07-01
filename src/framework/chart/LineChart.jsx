
import d3 from 'd3';
import PropTypes from 'prop-types';
import React, {
  Component,
} from 'react';
import ReactDOM from 'react-dom';

import ThrottledEventDispatcher
  from '../services/event/ThrottledEventDispatcher';

export default class LineChart extends Component {

  constructor(props) {
    super(props);

    this.DOT_RADIUS = 5;
    this.DOT_SELECTOR = '.lineChartDot';

    this.onMouseleave = this.onMouseleave.bind(this);
    this.onMousemove = this.onMousemove.bind(this);
    this.onResize = this.onResize.bind(this);
  }

  componentDidMount() {
    this.lineChart = this.refs.lineChart;

    this.lineChartSvg = d3.select(this.refs.lineChartSvg);

    this.lineChartTooltip = this.refs.lineChartTooltip;

    // Add a 'group' element to the SVG, which will contain our chart.
    this.container = this.lineChartSvg.append('g');

    this.renderChart(this.props, true);

    this.lineChartSvg.on('mouseleave', this.onMouseleave);
    this.lineChartSvg.on('mousemove', this.onMousemove);
    // Throttle resize event handling, in an attempt to improve performance.
    this.resizeEventDispatcher = new ThrottledEventDispatcher(
      'resize', `lineChartResize${new Date()}`, window, this.onResize
    );
  }

  shouldComponentUpdate(nextProps) {
    // Every time React tries to render, we'll intercept the attempt here, and
    // do our own re-render.
    const updateImmediately = this.props.height !== nextProps.height;
    this.renderChart(nextProps, updateImmediately);

    // Prevent React from calling render() more than once (when mounted).
    return false;
  }

  componentWillUnmount() {
    this.resizeEventDispatcher.teardown();
  }

  onMouseleave() {
    this.lineChartSvg.selectAll(this.DOT_SELECTOR).style('opacity', 0);
  }

  onMousemove() {
    const dataSetDots = this.lineChart.querySelectorAll(this.DOT_SELECTOR);
    const mouseX = d3.mouse(this.refs.lineChartSvg)[0];

    let closestDots = [];
    let minDistance;
    let preferredDotX;

    dataSetDots.forEach((dot) => {
      const dotX = parseInt(dot.getAttribute('cx'), 10);
      const distance = Math.abs(mouseX - dotX);
      if (isNaN(minDistance) || (distance < minDistance)) {
        minDistance = distance;
        preferredDotX = undefined;
      }
      if (distance === minDistance) {
        if (isNaN(preferredDotX) || dotX < preferredDotX) {
          closestDots = [];
          preferredDotX = dotX;
        }
        if (dotX === preferredDotX) {
          closestDots.push(dot);
        }
      }
      d3.select(dot).style('opacity', 0);
    });

    d3.selectAll(closestDots).style('opacity', 1);
  }

  onResize() {
    this.renderChart(this.props, true);
  }

  styleAxis(axis, orientation) {
    // Add class for tests.
    axis.attr('class', `lineChart${orientation}Axis`);

    // Add classes for styling.
    axis.selectAll('line').attr('class', 'lineChartAxisTick__mark');
    axis.selectAll('text').attr('class', 'lineChartAxisTick__text');

    // Remove paths added by d3.axis.
    axis.selectAll('path').remove();
  }

  renderChart(props, updateImmediately = false) {
    const {
      data,
      dateFormat,
      dateRange,
      height,
      transitionDuration,
      xAxisLabelHeight,
      yAxisFormat,
      yAxisLabelWidth,
      yAxisRange,
    } = props;

    const duration = updateImmediately ? 0 : transitionDuration;
    const marginTop = 5;
    const width = this.lineChart.offsetWidth;
    const yAxisMax = height - xAxisLabelHeight;
    const yAxisTickSize = width - yAxisLabelWidth;

    let marginLeft = 5;
    let marginRight = yAxisLabelWidth;

    if (props.isYAxisLeft) {
      marginLeft = yAxisLabelWidth;
      marginRight = 5;
    }

    const xAxisMax = width - marginRight;

    // Set the correct dimensions.
    this.lineChart.style.height = height;

    // Set dimensions of the SVG to fill containing element.
    this.lineChartSvg.attr('width', width).attr('height', height);

    // SCALES //////////////////////////////////////////////////////////////////

    // Create time scale for X axis, mapping date range to chart width.
    const xAxisScale = d3.time.scale().domain(dateRange)
      .range([marginLeft, xAxisMax]);

    // Create linear scale for Y axis, mapping data range to chart height.
    const yAxisScale = d3.scale.linear().domain(yAxisRange)
      .range([yAxisMax, marginTop]);

    // X AXIS //////////////////////////////////////////////////////////////////

    // Create X axis.
    const xAxis = d3.svg.axis().scale(xAxisScale).ticks(dateFormat)
      .tickSize(yAxisMax);

    if (!this.xAxis) {
      // Create the X axis if it doesn't exist.
      this.xAxis = this.container.append('g');
    }

    if (updateImmediately) {
      // Update the X axis without an animation.
      this.xAxis.call(xAxis);
    } else {
      // Update the X axis and animate the change.
      this.xAxis.transition().duration(duration).call(xAxis);
    }

    this.xAxis.call(this.styleAxis, 'X');

    // Y AXIS //////////////////////////////////////////////////////////////////

    // Create Y axis.
    const yAxis = d3.svg.axis().orient((props.isYAxisLeft ? 'left' : 'right'))
      .scale(yAxisScale).tickFormat(yAxisFormat)
      .tickSize(yAxisTickSize);

    if (!this.yAxis) {
      // Create the Y axis if it doesn't exist.
      this.yAxis = this.container.append('g');
    }

    const yAxisOrientationTransform =
      `translate(${props.isYAxisLeft ? width : 0},0)`;

    if (updateImmediately) {
      // Update the Y axis without an animation.
      this.yAxis.attr('transform', yAxisOrientationTransform).call(yAxis);
    } else {
      // Update the Y axis and animate the change.
      this.yAxis.transition().duration(duration)
        .attr('transform', yAxisOrientationTransform).call(yAxis);
    }

    this.yAxis.call(this.styleAxis, 'Y');

    // LINES ///////////////////////////////////////////////////////////////////

    // Create a line generator for mapping date to x position, and input
    // data to y position.
    const lineGenerator = d3.svg.line().interpolate('monotone')
      .x(item => xAxisScale(item.date))
      .y(item => yAxisScale(item.yValue));

    // Bind lines to their data sources.
    const lines = this.container.selectAll('.lineChartLine').data(data);

    // Remove obsolete paths that map to removed data sources.
    lines.exit().remove();

    // Add new paths for new data sources, add class for styling and set color.
    lines.enter().append('path').attr('class', 'lineChartLine')
      .style('stroke', item => item.color);

    // Transition each line from the previous shape to the new shape.
    lines.transition().duration(duration)
      .attr('d', item => lineGenerator(item.values));

    // TOOLTIP /////////////////////////////////////////////////////////////////

    if (props.tooltipProvider) {
      this.container.selectAll(this.DOT_SELECTOR).remove();

      data.forEach((dataSet, index) => {
        const dataSetDots = this.container.selectAll(this.DOT_SELECTOR + index)
          .data(dataSet.values);

        dataSetDots.enter().append('circle')
          .attr('class', `lineChartDot lineChartDot${index}`)
          .attr('cx', item => xAxisScale(item.date))
          .attr('cy', item => yAxisScale(item.yValue))
          .attr('fill', dataSet.color)
          .attr('r', this.DOT_RADIUS)
          .style('opacity', 0);

        dataSetDots.on('mouseover', (item) => {
          this.lineChartTooltip.style.display = 'block';
          this.lineChartTooltip.style.left = '0px';
          this.lineChartTooltip.style.top = '0px';

          ReactDOM.render(
            props.tooltipProvider(item),
            this.lineChartTooltip
          );

          const dot = d3.select(d3.event.target);
          const dotX = parseInt(dot.attr('cx'), 10);
          const dotY = parseInt(dot.attr('cy'), 10);
          const tooltipHeight = this.lineChartTooltip.offsetHeight;
          const tooltipWidth = this.lineChartTooltip.offsetWidth;

          let tooltipX = dotX + this.DOT_RADIUS;
          if (xAxisMax < (tooltipX + tooltipWidth)) {
            tooltipX = tooltipX - (2 * this.DOT_RADIUS) - tooltipWidth;
          }

          let tooltipY = dotY + this.DOT_RADIUS;
          if (yAxisMax < (tooltipY + tooltipHeight)) {
            tooltipY = tooltipY - (2 * this.DOT_RADIUS) - tooltipHeight;
          }

          this.lineChartTooltip.style.left = `${tooltipX}px`;
          this.lineChartTooltip.style.top = `${tooltipY}px`;
          this.lineChartTooltip.style.opacity = 1;
        });

        dataSetDots.on('mouseout', () => {
          this.lineChartTooltip.style.display = 'none';
          this.lineChartTooltip.style.opacity = 0;
        });
      });
    }
  }

  render() {
    // Render will only be called once, after the component mounts.
    return (
      <div
        data-testid="LineChart"
        className="lineChart"
        ref="lineChart"
      >
        <svg
          className="lineChart__svg"
          ref="lineChartSvg"
        />
        <div
          className="lineChart__tooltip"
          ref="lineChartTooltip"
        />
      </div>
    );
  }

}

LineChart.propTypes = {
  data: PropTypes.array.isRequired, // eslint-disable-line react/no-unused-prop-types
  dateFormat: PropTypes.func, // eslint-disable-line react/no-unused-prop-types
  dateRange: PropTypes.array.isRequired, // eslint-disable-line react/no-unused-prop-types
  height: PropTypes.number.isRequired,
  isYAxisLeft: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
  tooltipProvider: PropTypes.func, // eslint-disable-line react/no-unused-prop-types
  transitionDuration: PropTypes.number, // eslint-disable-line react/no-unused-prop-types
  xAxisLabelHeight: PropTypes.number, // eslint-disable-line react/no-unused-prop-types
  yAxisFormat: PropTypes.func, // eslint-disable-line react/no-unused-prop-types
  yAxisLabelWidth: PropTypes.number, // eslint-disable-line react/no-unused-prop-types
  yAxisRange: PropTypes.array.isRequired, // eslint-disable-line react/no-unused-prop-types
};

LineChart.defaultProps = {
  transitionDuration: 1000,
  xAxisLabelHeight: 14,
  yAxisLabelWidth: 20,
};
