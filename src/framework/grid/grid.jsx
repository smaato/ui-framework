
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
    // Style classes
    const classes = this.props.classes || {};
    const containerClass = classNames('dataTable__container', classes.container);
    const tableClass = classNames('dataTable__table', classes.table);

    // Header
    const headerCells = this.props.renderer.header.map((cellRenderer) => {
      return cellRenderer(this.props.data.header);
    });

    // Body
    const bodyRows = this.props.data.body.map((dataRow) => {
      return this.props.renderer.body.map((cellRenderer) => {
        return cellRenderer(dataRow);
      });
    });

    // Footer
    const footerCells = this.props.renderer.footer.map((cellRenderer) => {
      return cellRenderer(this.props.data.footer);
    });

    return (
      <div className={containerClass}>
        <div className={tableClass}>
          <GridHeader
            classes={classes}
            cells={headerCells}
          />
          <GridBody
            classes={classes}
            rows={bodyRows}
          />
          <GridFooter
            classes={classes}
            cells={footerCells}
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
