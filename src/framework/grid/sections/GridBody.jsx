
import React, {
  Component,
  PropTypes
} from 'react';
import GridSection from './GridSection.jsx';

export default class GridBody extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <GridSection
        section="body"
        classes={this.props.classes}
        rows={this.props.rows}
      />
    );
  }

}

GridBody.propTypes = {
  classes: PropTypes.object,
  rows: PropTypes.array.isRequired,
};
