
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
    let data = this.props.data;
    let sectionProps = Object.assign({}, this.props);
    delete sectionProps.data;

    return (
      <div className={[this.props.rootClass, 'container'].join('__')}>
        <div className={[this.props.rootClass, 'table'].join('__')}>
          <GridSection
            {...sectionProps}
            section="thead"
            rows={data.thead}
          />
          <GridSection
            {...sectionProps}
            section="tbody"
            rows={data.tbody}
          />
          <GridSection
            {...sectionProps}
            section="tfoot"
            rows={data.tfoot}
          />
        </div>
      </div>
    );
  }

}

Grid.propTypes = {
  rootClass: PropTypes.string,
  data: PropTypes.object
};

Grid.defaultProps = {
  rootClass: 'dataTable'
};
