
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
    return (
      <div className={[this.props.rootClass, 'container'].join('__') + (this.props.appendClass || '')}>
        <div className={[this.props.rootClass, 'table'].join('__')}>
          <GridSection
            section="header"
            rootClass={this.props.rootClass}
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
          <GridSection
            section="body"
            rootClass={this.props.rootClass}
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
          <GridSection
            section="footer"
            rootClass={this.props.rootClass}
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
  rootClass: PropTypes.string,
  appendClass: PropTypes.string,
  data: PropTypes.object.isRequired,
  renderer: PropTypes.object.isRequired,
};

Grid.defaultProps = {
  rootClass: 'dataTable'
};
