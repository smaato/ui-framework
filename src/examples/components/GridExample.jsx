
import React, {
  Component,
  PropTypes
} from 'react';

export default class GridExample extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    var bodyDataRow = {
      id: 1,
      name: 'Ford F150',
      status: 'In Production',
      fuel: 'Diesel, Unleaded',
      passengers: '3, 5, 6',
      cylinders: '6, 8',
      fuelEconomy: '25mpg',
      sold: '202.1k',
      registered: '200.5k',
    };

    var data = {
      header: {
        name: 'Name',
        status: 'Status',
        fuel: 'Fuel',
        passengers: 'Passangers',
        cylinders: 'Cylinders',
        fuelEconomy: 'Fuel Economy',
        sold: '# Sold',
        registered: 'Registered',
      },
      body: [
        bodyDataRow, bodyDataRow, bodyDataRow, bodyDataRow, bodyDataRow,
        bodyDataRow, bodyDataRow, bodyDataRow, bodyDataRow, bodyDataRow,
        bodyDataRow, bodyDataRow, bodyDataRow, bodyDataRow, bodyDataRow,
        bodyDataRow, bodyDataRow, bodyDataRow, bodyDataRow, bodyDataRow
      ],
      footer: {
        name: null,
        status: null,
        fuel: null,
        passengers: null,
        cylinders: null,
        fuelEconomy: null,
        sold: '152.1m',
        registered: 'Registered',
      }
    };

    var renderer = {
      header: [
        (item) => { return item.name },
        (item) => { return item.status },
        (item) => { return item.fuel },
        (item) => { return item.passengers },
        (item) => { return item.cylinders },
        (item) => { return item.fuelEconomy },
        (item) => { return item.sold },
        (item) => { return item.registered },
      ],
      body: [
        // For now it is a copy-paste for all sections, but in future this can be used to wrap content into HTML
        (item) => { return item.name },
        (item) => { return item.status },
        (item) => { return item.fuel },
        (item) => { return item.passengers },
        (item) => { return item.cylinders },
        (item) => { return item.fuelEconomy },
        (item) => { return item.sold },
        (item) => { return item.registered },
      ],
      footer: [
        (item) => { return item.name },
        (item) => { return item.status },
        (item) => { return item.fuel },
        (item) => { return item.passengers },
        (item) => { return item.cylinders },
        (item) => { return item.fuelEconomy },
        (item) => { return item.sold },
        (item) => { return item.registered },
      ]
    };

    return (
      <Grid
        classes={
          {
            container: 'prefix-container',
            table: 'prefix-table',
            header: 'prefix-header',
            headerRow: 'prefix-headerRow',
            headerCell: 'prefix-headerCell',
            body: 'prefix-body',
            bodyRow: 'prefix-bodyRow',
            bodyCell: 'prefix-bodyCell',
            footer: 'prefix-footer',
            footerRow: 'prefix-footerRow',
            footerCell: 'prefix-footerCell',
          }
        }
        data={data}
        renderer={renderer}
      />
    );
  }

}
