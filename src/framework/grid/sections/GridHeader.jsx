
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
        classes={this.props.classes}
        rows={this.props.rows}
      />
    );
  }

}

GridHeader.propTypes = {
  classes: PropTypes.object,
  rows: PropTypes.array.isRequired,
};
