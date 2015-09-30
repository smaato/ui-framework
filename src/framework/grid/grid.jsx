
import React, {
  Component,
  PropTypes
} from 'react';
import GridSection from './GridSection.jsx';

export default class Grid extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    var gridData = this.props.data;
    // These are the props to be passed down to GridSection component
    var sectionProps = Object.assign({}, this.props);
    delete sectionProps.data;
    delete sectionProps.appendClass;
    // Will hold rows for each section
    let sectionsData = {};

    Object.keys(gridData).forEach(function(sectionName) {
      gridData[sectionName].forEach(function (rowData, rowIndex) {
        rowData.forEach(function (cellData, cellIndex) {
          // Section is an array of rows
          sectionsData[sectionName] = sectionsData[sectionName] || [];
          // Row is an object
          sectionsData[sectionName][rowIndex] = sectionsData[sectionName][rowIndex] || {};
          // Cells is an array of objects
          sectionsData[sectionName][rowIndex].cells = sectionsData[sectionName][rowIndex].cells || [];
          // Cell is an object
          sectionsData[sectionName][rowIndex].cells[cellIndex] = sectionsData[sectionName][rowIndex].cells[cellIndex] || {};
          sectionsData[sectionName][rowIndex].cells[cellIndex].content = cellData;
        });
      });
    });

    return (
      <div className={[this.props.rootClass, 'container'].join('__') + (this.props.appendClass || '')}>
        <div className={[this.props.rootClass, 'table'].join('__')}>
          <GridSection
            {...sectionProps}
            section="thead"
            rows={sectionsData.thead}
          />
          <GridSection
            {...sectionProps}
            section="tbody"
            rows={sectionsData.tbody}
          />
          <GridSection
            {...sectionProps}
            section="tfoot"
            rows={sectionsData.tfoot}
          />
        </div>
      </div>
    );
  }

}

Grid.propTypes = {
  rootClass: PropTypes.string,
  appendClass: PropTypes.string,
  data: PropTypes.object.isRequired
};

Grid.defaultProps = {
  rootClass: 'dataTable'
};
