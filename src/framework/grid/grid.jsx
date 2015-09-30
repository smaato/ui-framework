
import React, {
  Component,
  PropTypes
} from 'react';
import GridHeader from './sections/GridHeader.jsx';
import GridBody from './sections/GridBody.jsx';
import GridFooter from './sections/GridFooter.jsx';

export default class Grid extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'dataTable__container' + (this.props.appendClass || '')}>
        <div className='dataTable__table'>
          <GridHeader
            appendClass={this.props.appendClass}
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
            appendClass={this.props.appendClass}
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
            appendClass={this.props.appendClass}
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
  appendClass: PropTypes.string,
  data: PropTypes.object.isRequired,
  renderer: PropTypes.object.isRequired,
};
