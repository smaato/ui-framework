
import React, {
  Component,
  PropTypes
} from 'react';
import GridSection from './GridSection.jsx';

export default class GridHeader extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <GridSection
        section="header"
        appendClass={this.props.appendClass}
        rows={this.props.rows}
      />
    );
  }

}

GridHeader.propTypes = {
  appendClass: PropTypes.string,
  rows: PropTypes.array.isRequired,
};
