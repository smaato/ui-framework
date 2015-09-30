
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
        appendClass={this.props.appendClass}
        rows={this.props.rows}
      />
    );
  }

}

GridBody.propTypes = {
  appendClass: PropTypes.string,
  rows: PropTypes.array.isRequired,
};
