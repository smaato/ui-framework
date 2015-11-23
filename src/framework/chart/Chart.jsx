
import 'd3';

// Import exports from various modules.
import React, {
  Component,
  PropTypes,
} from 'react';

import $ from 'jquery';
import ReactDOM from 'react-dom';

// Define the component class and provide it as an export.
export default class LineChart extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.renderChart(this.props);
  }

  shouldComponentUpdate(nextProps) {
    // Every time React tries to render, we'll intercept the attempt here, and
    // do our own re-render.
    this.renderChart(nextProps);

    // Prevent React from calling render() more than once (when mounted).
    return false;
  }

  renderChart(props) {
    const {
      id,
      data,
      xRange,
      yRange,
      height,
    } = props;

    const $node = $(ReactDOM.findDOMNode(this));
    const width = $node.width();

    // Empty the node so we re-render from scratch.
    $node.empty();

    // Set the correct dimensions.
    $node.css('height', height);

    // Create the chart SVG, position and size it.
    const svg = d3.select(`#${id}`).append('svg')
      .attr('width', width)
      .attr('height', height);

    // Bind data to shapes.
    const lineContainers = svg.selectAll('.lineContainer')
      .data(data)
      .enter()
      .append('g')
      .attr('class', 'lineContainer');

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

    // Generate lines.
    lineContainers.append('path')
      .attr('class', 'line')
      .attr('d', item => lineGenerator(item.values));

    // Apply stroke style to each line.
    for (const [index, lineContainer] of lineContainers[0].entries()) {
      $(lineContainer).css('stroke', data[index].color);
    }
  }

  render() {
    // Render will only be called once, after the component mounts.
    return (
      <div id={this.props.id}></div>
    );
  }

}

LineChart.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  xRange: PropTypes.array.isRequired,
  yRange: PropTypes.array.isRequired,
  height: PropTypes.number.isRequired,
};
