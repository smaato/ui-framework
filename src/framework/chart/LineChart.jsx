
/* global d3 */
import 'd3';
import $ from 'jquery';
import React, {
  Component,
  PropTypes,
} from 'react';
import ReactDOM from 'react-dom';

import ThrottledEventDispatcher
  from '../services/event/ThrottledEventDispatcher';

export default class LineChart extends Component {

  constructor(props) {
    super(props);

    this.onResize = this.onResize.bind(this);
  }

  componentDidMount() {
    // Throttle resize event handling, in an attempt to improve performance.
    this.resizeEventDispatcher = new ThrottledEventDispatcher(
      'resize', `lineChartResize${new Date()}`, window, this.onResize
    );

    this.$node = $(ReactDOM.findDOMNode(this));
    this.svg = d3.select(this.$node.find('svg')[0]);

    // Add a 'group' element to the SVG, which will contain our chart.
    this.container = this.svg.append('g');

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
      dateFormat,
      dateRange,
      height,
      yAxisFormat,
      yAxisLabelWidth,
      yAxisRange,
    } = props;

    const marginBottom = 20;
    const marginRight = yAxisLabelWidth;
    const transitionDuration =
      updateImmediately ? 0 : this.props.transitionDuration;

    const width = this.$node.width();
    const availableWidth = width - marginRight;
    const availableHeight = height - marginBottom;

    // Set the correct dimensions.
    this.$node.css('height', height);

    // Set dimensions of the SVG to fill containing element.
    this.svg.attr('width', width).attr('height', height);

    // SCALES //////////////////////////////////////////////////////////////////

    // Create time scale for X axis, mapping date range to chart width.
    const xAxisScale = d3.time.scale().domain(dateRange)
      .range([0, availableWidth]);

    // Create linear scale for Y axis, mapping data range to chart height.
    const yAxisScale = d3.scale.linear().domain(yAxisRange)
      .range([availableHeight, 0]);

    // X AXIS //////////////////////////////////////////////////////////////////

    // Create X axis.
    const xAxis = d3.svg.axis().scale(xAxisScale).ticks(dateFormat)
      .tickSize(availableHeight, 0);

    // Style and position X axis elements.
    function styleXAxis(selection) {
      // Add class for tests.
      selection.attr('class', 'lineChartXAxis');

      // Add classes for styling.
      selection.selectAll('line').attr('class', 'lineChartXAxisTick__mark');
      selection.selectAll('text').attr('class', 'lineChartXAxisTick__text');
    }

    if (!this.xAxis) {
      // Create the X axis if it doesn't exist.
      this.xAxis = this.container.append('g').call(xAxis).call(styleXAxis);
    } else {
      // Update the X axis and animate the change.
      this.xAxis.transition().duration(transitionDuration).call(xAxis);
      this.xAxis.call(styleXAxis);
    }

    // Y AXIS //////////////////////////////////////////////////////////////////

    // Create Y axis.
    const yAxis = d3.svg.axis().scale(yAxisScale).tickFormat(yAxisFormat)
      .tickSize(availableWidth).orient('right');

    // Style and position Y axis elements.
    function styleYAxis(selection) {
      // Add class for tests.
      selection.attr('class', 'lineChartYAxis');

      // Add classes for styling.
      selection.selectAll('line').attr('class', 'lineChartYAxisTick__mark');
      selection.selectAll('text').attr('class', 'lineChartYAxisTick__text');

      // These paths are added by d3.axis, but we don't need them.
      selection.selectAll('path').remove();
    }

    if (!this.yAxis) {
      // Create the Y axis if it doesn't exist.
      this.yAxis = this.container.append('g').call(yAxis).call(styleYAxis);
    } else {
      if (updateImmediately) {
        // Update the Y axis without an animation.
        this.yAxis.call(yAxis);
      } else {
        // Update the Y axis and animate the change.
        this.yAxis.transition().duration(transitionDuration).call(yAxis);
      }

      this.yAxis.call(styleYAxis);
    }

    // LINES ///////////////////////////////////////////////////////////////////

    // Create a line generator for mapping date to x position, and input
    // data to y position.
    const lineGenerator = d3.svg.line().interpolate('basis')
      .x(item => xAxisScale(item.date))
      .y(item => yAxisScale(item.yValue));

    // Bind lines to their data sources.
    const lines = this.container.selectAll('.lineChartLine').data(data);

    // Transition each line from the previous shape to the new shape.
    lines.transition().duration(transitionDuration)
      .attr('d', item => lineGenerator(item.values));

    // Add new paths for new data sources, add class for styling and set color.
    lines.enter().append('path').attr('class', 'lineChartLine')
      .style('stroke', item => item.color);

    // Remove obsolete paths that map to removed data sources.
    lines.exit().remove();
  }

  render() {
    // Render will only be called once, after the component mounts.
    return (
      <div className="lineChart">
        <svg className="lineChart__svg" />
      </div>
    );
  }

}

LineChart.propTypes = {
  data: PropTypes.array.isRequired,
  dateFormat: PropTypes.func,
  dateRange: PropTypes.array.isRequired,
  height: PropTypes.number.isRequired,
  transitionDuration: PropTypes.number,
  yAxisFormat: PropTypes.func,
  yAxisLabelWidth: PropTypes.number,
  yAxisRange: PropTypes.array.isRequired,
};

LineChart.defaultProps = {
  transitionDuration: 1000,
  yAxisLabelWidth: 20,
};
