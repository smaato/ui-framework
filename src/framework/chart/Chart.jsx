
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

    this.container = svg.append('g')
      .attr('transform', 'translate(' + marginLeft + ',' + this.margin.top + ')');
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

    const $node = $(ReactDOM.findDOMNode(this));
    const width = $node.width();
    const svg = d3.select($node.find('svg')[0]);

    const transitionDuration = updateImmediately ? 0 : this.props.transitionDuration;

    // Set the correct dimensions.
    $node.css('height', height);

    // Set dimensions of svg to fill container.
    svg.attr('width', width).attr('height', height);

    // Create time scale for X axis.
    const xAxisScale = d3.time.scale()
      .range([0, width - marginLeft - marginRight])
      .domain(dateRange);

    // Create X axis.
    const xAxis = d3.svg.axis()
      .scale(xAxisScale)
      .ticks(dateFormat)
      .tickSize(6, 0)
      .orient('bottom');

    // Style and position X axis elements.
    function styleXAxis(g) {
      g.selectAll('line')
        .attr('class', 'chartXAxisTick__mark');

      g.selectAll('text')
        .attr('class', 'chartXAxisTick__text');
    }

    // If no X axis shape exists, create one. Otherwise, update it.
    const xAxisTransform = height - marginBottom - marginTop;
    if (!this.xAxis) {
      this.xAxis = this.container
        .append('g')
        .attr('transform', `translate(0, ${xAxisTransform})`)
        .call(xAxis)
        .call(styleXAxis);
    } else {
      this.xAxis
        .transition()
        .duration(transitionDuration)
        .attr('transform', `translate(0, ${xAxisTransform})`)
        .call(xAxis)
        .call(styleXAxis);
    }

    // Create linear scale for Y axis.
    const yAxisScale = d3.scale.linear()
      .range([height - marginTop - marginBottom, 0])
      .domain(yAxisRange);

    // Create Y axis.
    const yAxis = d3.svg.axis()
      .scale(yAxisScale)
      .tickSize(width - marginLeft - marginRight)
      .tickFormat(yAxisFormat)
      .orient('right');

    // Style and position Y axis elements.
    function styleYAxis(g) {
      g.selectAll('path')
        .attr('class', 'chartYAxis');

      g.selectAll('line')
        .attr('class', 'chartYAxisTick__mark');

      g.selectAll('text')
        .attr('class', 'chartYAxisTick__text')
        .attr('dx', -(width - marginRight));

      const borderRadius = 2;
      g.selectAll('.tick')
        .insert('rect', ':last-child')
        .attr('class', 'chartYAxisTick__background')
        .attr('x', -marginLeft)
        .attr('y', -8)
        .attr('width', marginLeft)
        .attr('height', 15)
        .attr('rx', borderRadius)
        .attr('ry', borderRadius);
    }

    // If no Y axis shape exists, create one. Otherwise, update it.
    if (!this.yAxis) {
      this.yAxis = this.container
        .append('g')
        .call(yAxis)
        .call(styleYAxis);
    } else {
      if (updateImmediately) {
        this.yAxis
          .call(yAxis);
      } else {
        this.yAxis
          .transition()
          .duration(transitionDuration)
          .call(yAxis)
           // Cancel transition on customized attributes
          .selectAll('text')
          .tween('attr.dx', null);
      }

      this.yAxis.call(styleYAxis);
    }

    // Create a line generator for mapping date to Y axis value.
    const lineGenerator = d3.svg.line()
      .interpolate('basis')
      .x(item => xAxisScale(item.date))
      .y(item => yAxisScale(item.yValue));

    // Bind data to lines.
    const lines = this.container.selectAll('.chartLine')
      .data(data)
      .attr('class', 'chartLine');

    // Transition from previous lines to new lines.
    lines.transition()
      .duration(transitionDuration)
      .attr('d', item => lineGenerator(item.values))
      .style('stroke', (d, i) => data[i].color);

    // Add elements that map to added data.
    lines.enter()
      .append('path')
      .attr('class', 'chartLine')
      .attr('d', item => lineGenerator(item.values))
      .style('stroke', (d, i) => data[i].color);

    // Remove elements that map to removed data.
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
