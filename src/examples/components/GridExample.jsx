
import React, {
  Component,
  PropTypes
} from 'react';

export default class GridExample extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    /*
     * Pure data
     * */

    // An array of cells
    var tbodyDataRow = [
      <span className="checkboxWrapper">
        <input type="checkbox" name="item_1" id="item_1" className="checkbox__input"/>
        <label htmlFor="item_1" className="checkbox__faux__input"></label>
      </span>,
      'Ford F150',
      'In Production',
      'Diesel, Unleaded',
      '3, 5, 6',
      '6, 8',
      '25mpg',
      '202.1k',
      '200.5k',
      <span>
        <a href="" className="icon glyphicons-more"></a>
        <a href="" className="icon glyphicons-cogwheel"></a>
      </span>
    ];

    // Section is an array of rows
    var tbodyDataRows = [
      tbodyDataRow, tbodyDataRow, tbodyDataRow, tbodyDataRow, tbodyDataRow,
      tbodyDataRow, tbodyDataRow, tbodyDataRow, tbodyDataRow, tbodyDataRow,
      tbodyDataRow, tbodyDataRow, tbodyDataRow, tbodyDataRow, tbodyDataRow,
      tbodyDataRow, tbodyDataRow, tbodyDataRow, tbodyDataRow, tbodyDataRow
    ];

    // Data is a map: section name to array of rows
    var data = {
      thead: [
        [
          <span className="checkboxWrapper">
            <input type="checkbox" name="table_batch" id="table_batch" className="checkbox__input"/>
            <label htmlFor="table_batch" className="checkbox__faux__input"></label>
          </span>,
          'Name',
          'Status',
          'Fuel',
          'Passengers',
          'Cylinders',
          'Fuel Economy',
          '# Sold',
          'Registered',
          null
        ]
      ],
      tbody: tbodyDataRows,
      tfoot: [
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          '152.1m',
          'Registered',
          null
        ]
      ]
    };

    return (
      <Grid
        data={data}
      />
    );
  }

}
