
import React, {
  Component,
  PropTypes
} from 'react';
// This was initially known as React.addons.classSet, but eventually became separate npm module
// More on https://facebook.github.io/react/docs/class-name-manipulation.html
import classNames from 'classnames';
import GridHeader from './sections/GridHeader.jsx';
import GridBody from './sections/GridBody.jsx';
import GridFooter from './sections/GridFooter.jsx';

export default class Grid extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let classes = this.props.classes || {};

    return (
      <div className={classNames('dataTable__container', classes.container)}>
        <div className={classNames('dataTable__table', classes.table)}>
          <GridHeader
            classes={classes}
            rows={
              // An array of rows
              [
                // Will be an array (row) of strings (cells)
                this.props.renderer.header.map((cellRenderer) => {
                  return cellRenderer(this.props.data.header);
                })
              ]
            }
          />
          <GridBody
            classes={classes}
            rows={
              // An array of rows
              this.props.data.body.map((dataRow) => {
                // Will be an array (row) of strings (cells)
                return this.props.renderer.body.map((cellRenderer) => {
                  return cellRenderer(dataRow);
                });
              })
            }
          />
          <GridFooter
            classes={classes}
            rows={
              // An array of rows
              [
                // Will be an array (row) of strings (cells)
                this.props.renderer.footer.map((cellRenderer) => {
                  return cellRenderer(this.props.data.footer);
                })
              ]
            }
          />
        </div>
      </div>
    );
  }

}

Grid.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.object.isRequired,
  renderer: PropTypes.object.isRequired,
};
