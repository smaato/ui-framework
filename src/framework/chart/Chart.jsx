
import 'd3';

import React, {
  Component,
  PropTypes,
} from 'react';

import $ from 'jquery';
import ReactDOM from 'react-dom';

import ThrottledEventDispatcher from '../services/ThrottledEventDispatcher';

export default class LineChart extends Component {

  constructor(props) {
    super(props);

    this.margin = {
      right: 0,
      top: 20,
      bottom: 20,
    };

    this.onResizeHandler = this.onResize.bind(this);
  }

  componentDidMount() {
    // Throttle resize event handling, in an attempt to improve performance.
    this.resizeEventDispatcher = new ThrottledEventDispatcher(
      'resize', `lineChartResize${new Date()}`, window, this.onResizeHandler
    );

    const $node = $(ReactDOM.findDOMNode(this));
    const svg = d3.select($node.find('svg')[0]);
    const marginLeft = this.props.yAxisLabelWidth;

    // Add a 'group' element to the SVG, which will contain our chart.
    this.container = svg.append('g')
      .attr('transform', 'translate(' + marginLeft + ',' + this.margin.top + ')');

    this.renderChart(this.props, true);
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

  onResize() {
    this.renderChart(this.props, true);
  }

  renderChart(props, updateImmediately = false) {
    const {
      data,
      dateRange,
      dateFormat,
      yAxisRange,
      yAxisFormat,
      height,
    } = props;

    const marginLeft = this.props.yAxisLabelWidth;
    const marginRight = this.margin.right;
    const marginTop = this.margin.top;
    const marginBottom = this.margin.bottom;
    const transitionDuration = updateImmediately ? 0 : this.props.transitionDuration;

    // Set the correct dimensions.
    const $node = $(ReactDOM.findDOMNode(this));
    $node.css('height', height);

    // Set dimensions of the SVG to fill containing element.
    const svg = d3.select($node.find('svg')[0]);
    const width = $node.width();
    svg.attr('width', width).attr('height', height);

    // SCALES //////////////////////////////////////////////////////////////////

    // Create time scale for X axis, mapping date range to chart width.
    const xAxisScale = d3.time.scale()
      .domain(dateRange)
      .range([0, width - marginLeft - marginRight]);

    // Create linear scale for Y axis, mapping data range to chart height.
    const yAxisScale = d3.scale.linear()
      .domain(yAxisRange)
      .range([height - marginTop - marginBottom, 0]);

    // X AXIS //////////////////////////////////////////////////////////////////

    // Create X axis.
    const xAxis = d3.svg.axis()
      .scale(xAxisScale)
      .ticks(dateFormat)
      .tickSize(6, 0);

    // Style and position X axis elements.
    function styleXAxis(selection) {
      // Add classes for tests.
      selection.attr('class', 'chartXAxis');

      selection.selectAll('line')
        .attr('class', 'chartXAxisTick__mark');

      selection.selectAll('text')
        .attr('class', 'chartXAxisTick__text');
    }

    const xAxisTransform = height - marginBottom - marginTop;

    function updateXAxis(selection) {
      selection.attr('transform', `translate(0, ${xAxisTransform})`)
        .call(xAxis)
        .call(styleXAxis);
    }

    // This transform value positions the x axis at the bottom of the SVG.
    if (!this.xAxis) {
      // Create the x axis if it doesn't exist.
      this.xAxis = this.container.append('g');
      updateXAxis(this.xAxis);
    } else {
      // Update it and animate the change.
      this.xAxis
        .transition()
        .duration(transitionDuration);
      updateXAxis(this.xAxis);
    }

    // Y AXIS //////////////////////////////////////////////////////////////////

    // Create Y axis.
    const yAxis = d3.svg.axis()
      .scale(yAxisScale)
      .tickSize(width - marginLeft - marginRight)
      .tickFormat(yAxisFormat)
      .orient('right');

    // Style and position Y axis elements.
    function styleYAxis(selection) {
      // Add classes for tests.
      selection.attr('class', 'chartYAxis');

      // These paths are added by d3.axis, but we don't need them.
      selection.selectAll('path')
        .remove();

      selection.selectAll('line')
        .attr('class', 'chartYAxisTick__mark');

      // Move the text to the left side of the SVG.
      selection.selectAll('text')
        .attr('class', 'chartYAxisTick__text')
        .attr('dx', -(width - marginRight));

      // Add small background boxes behind each tick's text.
      // Remove existing boxes first, to avoid duplicates.
      selection.selectAll('rect')
        .remove();
      selection.selectAll('.tick')
        .insert('rect', ':last-child')
        .attr('class', 'chartYAxisTick__background')
        .attr('x', -marginLeft)
        .attr('y', -8)
        .attr('width', marginLeft)
        .attr('height', 15)
        .attr('rx', 2) // Border-radius
        .attr('ry', 2); // Border-radius
    }

    // If no Y axis shape exists, create one. Otherwise, update it.
    if (!this.yAxis) {
      this.yAxis = this.container
        .append('g')
        .call(yAxis)
        .call(styleYAxis);
    } else {
      if (updateImmediately) {
        // Update the axis without an animation.
        this.yAxis
          .call(yAxis);
      } else {
        // Animate the axis, but not the tick mark text.
        this.yAxis
          .transition()
          .duration(transitionDuration)
          .call(yAxis)
           // Cancel transition on customized attributes, e.g. tick mark text.
          .selectAll('text')
          .tween('attr.dx', null);
      }

      this.yAxis.call(styleYAxis);
    }

    // LINES ///////////////////////////////////////////////////////////////////

    // Create a line generator for mapping date to x position, and input
    // data to y position.
    const lineGenerator = d3.svg.line()
      .interpolate('basis')
      .x(item => xAxisScale(item.date))
      .y(item => yAxisScale(item.yValue));

    // Bind lines to their data sources.
    const lines = this.container.selectAll('.chartLine')
      .data(data);

    // Transition each line from the previous shape to the new shape.
    lines.transition()
      .duration(transitionDuration)
      .attr('d', item => lineGenerator(item.values));

    // Add new paths for new data sources, and set styling.
    lines.enter()
      .append('path')
      .attr('class', 'chartLine')
      .style('stroke', item => item.color);

    // Remove obsolete paths that map to removed data sources.
    lines.exit()
      .remove();
  }

  render() {
    // Render will only be called once, after the component mounts.
    return (
      <div className="chart">
        <div className="chart__fakeBackgound"></div>
        <svg className="chart__svg" />
      </div>
    );
  }

}

LineChart.propTypes = {
  data: PropTypes.array.isRequired,
  dateRange: PropTypes.array.isRequired,
  dateFormat: PropTypes.func.isRequired,
  yAxisRange: PropTypes.array.isRequired,
  yAxisFormat: PropTypes.func,
  yAxisLabelWidth: PropTypes.number,
  height: PropTypes.number.isRequired,
  transitionDuration: PropTypes.number,
};

LineChart.defaultProps = {
  yAxisLabelWidth: 20,
  transitionDuration: 1000,
};
