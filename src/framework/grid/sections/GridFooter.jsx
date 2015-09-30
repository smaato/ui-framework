
import React, {
  Component,
  PropTypes
} from 'react';
import GridSection from './GridSection.jsx';

export default class GridFooter extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <GridSection
        section="footer"
        classes={this.props.classes}
        rows={this.props.rows}
      />
    );
  }

}

GridFooter.propTypes = {
  classes: PropTypes.object,
  rows: PropTypes.array.isRequired,
};
