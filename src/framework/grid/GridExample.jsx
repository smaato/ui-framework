
import React, {
  Component,
  PropTypes
} from 'react';
import Grid from './Grid.jsx';

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

    /*
    * Config (how to display data). Not required
    * */

    var tbodyRowConfig = {
      appendClass: ' row-test',
      cells: [
        null,
        {
          appendClass: ' cell-test',
          contentWrap: {
            modifier: ['link'],
            href: '#',
            appendClass: ' blueLink'
          }
        },
        {
          contentWrap: {
            modifier: ['editable'],
            href: '#'
          }
        },
        {
          contentWrap: {
            modifier: ['editable'],
            href: '#'
          }
        },
        {
          contentWrap: {
            modifier: ['editable'],
            href: '#',
            before: <span className="icon glyphicons-user"></span>
          }
        },
        {
          contentWrap: {
            modifier: ['editable'],
            href: '#'
          }
        },
        {
          contentWrap: {
            modifier: ['editable'],
            href: '#',
            after: <span className="icon glyphicons-leaf"></span>
          }
        },
        {
          contentWrap: {
            modifier: ['readOnly'],
            href: '#',
            after: '+2%',
            afterWrap: {
              appendClass: 'Change up'
            }
          }
        },
        {
          contentWrap: {
            modifier: ['readOnly'],
            href: '#',
            after: '-2%',
            afterWrap: {
              appendClass: 'Change down'
            }
          }
        },
        null
      ]
    };

    var tbodyConfig = [
      tbodyRowConfig, tbodyRowConfig, tbodyRowConfig, tbodyRowConfig, tbodyRowConfig,
      tbodyRowConfig, tbodyRowConfig, tbodyRowConfig, tbodyRowConfig, tbodyRowConfig,
      tbodyRowConfig, tbodyRowConfig, tbodyRowConfig, tbodyRowConfig, tbodyRowConfig,
      tbodyRowConfig, tbodyRowConfig, tbodyRowConfig, tbodyRowConfig, tbodyRowConfig
    ];

    var config = {
      thead: [
        {
          cells: [
            null,
            {
              sortable: true
            },
            {
              sortable: true
            },
            {
              sortable: true
            },
            {
              sortable: true
            },
            {
              sortable: true
            },
            {
              sortable: true
            },
            {
              sortable: true,
              selected: true,
              reverse: true
            },
            {
              sortable: true
            },
            null
          ]
        }
      ],
      tbody: tbodyConfig
    };

    return (
      <Grid
        data={data}
        config={config}
      />
    );
  }

}
