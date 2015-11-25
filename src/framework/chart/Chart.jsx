
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

    this.onResizeHandler = this.onResize.bind(this);
  }

  componentDidMount() {
    // Throttle resize event handling, in an attempt to improve performance.
    this.resizeEventDispatcher = new ThrottledEventDispatcher(
      'resize', `lineChartResize${new Date()}`, window, this.onResizeHandler
    );
  }

  shouldComponentUpdate(nextProps) {
    // Every time React tries to render, we'll intercept the attempt here, and
    // do our own re-render.
    this.renderChart(nextProps);

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
      xRange,
      yRange,
      height,
    } = props;

    const $node = $(ReactDOM.findDOMNode(this));
    const width = $node.width();
    const svg = d3.select($node.find('svg')[0]);

    // Set the correct dimensions.
    $node.css('height', height);

    // Set dimensions of svg to fill container.
    svg.attr('width', width).attr('height', height);

    // Create time scale for X axis.
    const xAxisScale = d3.time.scale()
      .range([0, width])
      .domain(xRange);

    // Create linear scale for Y axis.
    const yAxisScale = d3.scale.linear()
      .range([height, 0])
      .domain(yRange);

    // Create a line generator for mapping date to temperature.
    const lineGenerator = d3.svg.line()
      .interpolate('basis')
      .x(item => xAxisScale(item.date))
      .y(item => yAxisScale(item.temperature));

    // Bind data to shapes.
    const lines = svg.selectAll('.chartLine')
      .data(data)
      .attr('class', 'chartLine');

    // Transition from previous lines to new lines.
    const duration = updateImmediately ? 0 : this.props.duration;
    lines.transition().duration(duration)
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
      <div>
        <svg />
      </div>
    );
  }

}

LineChart.propTypes = {
  duration: PropTypes.number,
  data: PropTypes.array.isRequired,
  xRange: PropTypes.array.isRequired,
  yRange: PropTypes.array.isRequired,
  height: PropTypes.number.isRequired,
};

LineChart.defaultProps = {
  duration: 1000,
};
