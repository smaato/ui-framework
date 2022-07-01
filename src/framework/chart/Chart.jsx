
import classNames from 'classnames';
import d3 from 'd3';
import PropTypes from 'prop-types';
import React, {
  Component,
} from 'react';

import { Number } from '../services';

import Box from '../box/Box.jsx';
import ChartDot from './chartDot/ChartDot.jsx';
import DescriptionText from '../text/DescriptionText.jsx';
import Heading from '../text/Heading.jsx';
import HorizontalLine from '../horizontalLine/HorizontalLine.jsx';
import LineChart from './LineChart.jsx';
import Progress from '../progress/Progress.jsx';

export {
  default as LineChart,
} from './LineChart.jsx';

export default class Chart extends Component {

  constructor(props) {
    super(props);

    this.COLORS = ['#2799C4', '#35D0A0'];
    this.HEIGHT = 520;

    this.setData(this.props.data);
  }

  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(this.props.data) !== JSON.stringify(nextProps.data)) {
      this.setData(nextProps.data);
    }
  }

  setData(data) {
    this.data = [];
    this.minDate = undefined;
    this.maxDate = undefined;
    this.minY = undefined;
    this.maxY = undefined;

    data.forEach((dataSet, index) => {
      this.data.push({
        color: this.COLORS[index],
        id: index,
        name: this.props.legendLabelProvider(dataSet),
        values: [],
      });

      dataSet.forEach((dataPoint) => {
        const date = dataPoint.date;
        const yValue = dataPoint.value;

        this.data[index].values.push({
          date,
          yValue,
        });
        this.minDate = Math.min(date, this.minDate) || date;
        this.maxDate = Math.max(date, this.maxDate) || date;
        this.minY = Math.min(yValue, this.minY) || yValue;
        this.maxY = Math.max(yValue, this.maxY) || yValue;
      });
    });
  }

  renderLegend() {
    const legendItems = this.data.map(item => (
      <span key={item.id}><ChartDot color={item.color} /> {item.name}</span>
    ));

    return (
      <div className="chart__legend">{legendItems}</div>
    );
  }

  renderLineChart() {
    let lineChartClasses = 'chart__lineChart';
    let progress;

    if (this.props.isLoading) {
      lineChartClasses =
        classNames(lineChartClasses, 'chart__lineChart--blurred');
      progress = <Progress />;
    }

    return (
      <div className={lineChartClasses}>
        <LineChart
          data={this.data}
          dateFormat={d3.time.days}
          dateRange={[this.minDate, this.maxDate]}
          height={this.HEIGHT}
          tooltipProvider={this.props.tooltipProvider}
          yAxisFormat={Number.formatBigNumber}
          yAxisLabelWidth={32}
          yAxisRange={[this.minY, this.maxY]}
        />
        {progress}
      </div>
    );
  }

  render() {
    let description;

    if (this.props.description) {
      description = (
        <DescriptionText>
          {this.props.description}
        </DescriptionText>
      );
    }

    return (
      <Box data-testid="Chart" classes="chart" roundedCorners>
        <Heading size={Heading.SIZE.SMALL}>
          {this.props.title}{this.renderLegend()}
        </Heading>
        <HorizontalLine />
        {description}
        {this.renderLineChart()}
      </Box>
    );
  }

}

Chart.propTypes = {
  data: PropTypes.array.isRequired,
  description: PropTypes.string,
  isLoading: PropTypes.bool,
  legendLabelProvider: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  tooltipProvider: LineChart.propTypes.tooltipProvider,
};
